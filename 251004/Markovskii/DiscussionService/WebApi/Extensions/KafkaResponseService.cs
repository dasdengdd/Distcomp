﻿using System.Text.Json;
using System.Text.Json.Serialization;
using Confluent.Kafka;
using Infrastructure.Kafka;
using Infrastructure.Serialization;
using Microsoft.Extensions.Options;
using WebApi.Kafka;
using WebApi.Settings;

namespace WebApi.Extensions;

public class KafkaResponseService : BackgroundService
{
    private readonly KafkaConsumer<Ignore, PostRequest> _consumer;
    private readonly ILogger<KafkaResponseService> _logger;

    public KafkaResponseService(
        IServiceProvider serviceProvider,
        IOptions<KafkaSettings> options,
        ILogger<KafkaResponseService> logger
    )
    {
        var KafkaSettings = options.Value;
        _logger = logger;
        var handler = serviceProvider.GetRequiredService<PostHandler>();

        var serializer = new SystemTextJsonSerializer<PostRequest>(
            new JsonSerializerOptions { Converters = { new JsonStringEnumConverter() } }
        );

        _consumer = new KafkaConsumer<Ignore, PostRequest>(
            KafkaSettings.BootstrapServer,
            KafkaSettings.PostEventsTopic,
            KafkaSettings.GroupId,
            handler,
            null,
            serializer
        );
    }

    public override Task StopAsync(CancellationToken cancellationToken)
    {
        _consumer.Dispose();

        return Task.CompletedTask;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        try
        {
            await _consumer.Consume(stoppingToken);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Unhandled exception occured");
        }
    }
}