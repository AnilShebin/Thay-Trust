"use client";

import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from ".."; // ✅ your own theme context/provider
import React, { useCallback } from "react";
import { cn } from "@/utilities/ui";

export const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = useCallback(
    (checked: boolean) => {
      setTheme(checked ? "dark" : "light");
    },
    [setTheme]
  );

  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        "h-9 w-20"
      )}
    >
      <Switch
        checked={isDark}
        onCheckedChange={toggleTheme}
        className={cn(
          // track
          "peer absolute inset-0 h-full w-full rounded-full bg-input/50 transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          // thumb
          "[&>span]:h-7 [&>span]:w-7 [&>span]:rounded-full [&>span]:bg-background [&>span]:shadow [&>span]:z-10",
          // thumb positions
          "data-[state=unchecked]:[&>span]:translate-x-1",
          "data-[state=checked]:[&>span]:translate-x-[44px]"
        )}
      />

      {/* Sun (left) */}
      <span className="pointer-events-none absolute left-2 inset-y-0 z-0 flex items-center justify-center">
        <Sun
          size={16}
          className={cn(
            "transition-all duration-200 ease-out",
            isDark ? "text-muted-foreground/70" : "text-foreground scale-110"
          )}
        />
      </span>

      {/* Moon (right) */}
      <span className="pointer-events-none absolute right-2 inset-y-0 z-0 flex items-center justify-center">
        <Moon
          size={16}
          className={cn(
            "transition-all duration-200 ease-out",
            isDark ? "text-foreground scale-110" : "text-muted-foreground/70"
          )}
        />
      </span>
    </div>
  );
};
