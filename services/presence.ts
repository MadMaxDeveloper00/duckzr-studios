"use client";

import * as signalR from "@microsoft/signalr";

export const GetPresenceConnection = () => {

    const connection =
        new signalR.HubConnectionBuilder()

            .withUrl(
                "https://duckzr-studios-api-production.up.railway.app/PresenceHub"
            )

            .withAutomaticReconnect()

            .configureLogging(
                signalR.LogLevel.Information
            )

            .build();

    return connection;
};