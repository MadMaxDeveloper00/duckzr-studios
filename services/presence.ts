"use client";

import * as signalR from "@microsoft/signalr";

export const GetPresenceConnection = () => {

    const connection =
        new signalR.HubConnectionBuilder()

            .withUrl(
                "https://localhost:7071/PresenceHub"
            )

            .withAutomaticReconnect()

            .configureLogging(
                signalR.LogLevel.Information
            )

            .build();

    return connection;
};