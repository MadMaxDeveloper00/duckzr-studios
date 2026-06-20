"use client";

import { useEffect } from "react";
import { GetPresenceConnection }
from "@/services/presence";

export default function PresenceProvider() {

  useEffect(() => {

    async function connectPresence() {

      try {

        const connection = GetPresenceConnection();

        if (connection.state !== "Connected") {
          await connection.start();
        }

        if (connection.state === "Connected") {
          await connection.invoke(
            "UpdatePresence",
            "InLauncher"
          );
        }

      } catch (err) {

        console.error(
          "Presence connection failed:",
          err
        );

      }

    }

    connectPresence();

    return () => {

      const connection = GetPresenceConnection();
      connection.stop();

    };

  }, []);

  return null;
}