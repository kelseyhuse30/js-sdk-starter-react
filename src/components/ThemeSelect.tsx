import { For, Tabs } from "@chakra-ui/react"
import { THEMES } from "../constants";

interface ThemeHandler {
    currentTheme: string;
    onThemeClick(themeName: string): any;
}

export function ThemeSelect({ currentTheme, onThemeClick }: ThemeHandler) {
    return (
        <Tabs.Root value={currentTheme} variant="plain" onValueChange={(e) => onThemeClick(e.value)} size="lg">
            <Tabs.List bg="bg.muted" rounded="l3" p="1">
                <For each={THEMES}>
                {(theme) => (
                    <Tabs.Trigger key={theme} value={theme}>
                        {theme.toUpperCase()}
                    </Tabs.Trigger>
                )}
                </For>
                <Tabs.Indicator rounded="l2" />
            </Tabs.List>
        </Tabs.Root>
    );
}
