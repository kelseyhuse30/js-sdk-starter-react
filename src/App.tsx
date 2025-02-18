import {
  Box,
  Center,
  Separator,
  Spinner,
  Stack,
  Text,
  Theme,
  VStack,
} from "@chakra-ui/react";

import { FeltController } from "@feltmaps/js-sdk";
import { LayersList } from "./components/LayersList";
import { ViewportInfo } from "./components/ViewportInfo";
import { ThemeSelect } from "./components/ThemeSelect";
import { FeltContext, useFeltEmbed } from "./feltUtils";
import { THEME_TO_LAYER_MAP } from "./constants";
import { useState } from "react";

export default function Page() {
  const { felt, mapRef } = useFeltEmbed("p9CPdaItsRQm9COaGzgt17WB", {
    uiControls: {
      cooperativeGestures: false,
      fullScreenButton: false,
      showLegend: true,
    },
  });

  const [currentTheme, setCurrentTheme] = useState("");

  async function handleClick(theme: string) {
    if (!felt) {
      return;
    }
    setCurrentTheme(theme);
    let allGroupLayers = new Map(THEME_TO_LAYER_MAP);
    const groupVisible = allGroupLayers.get(theme);

    if (groupVisible === undefined) {
      console.warn("ERROR: Theme not found");
      return;
    }

    allGroupLayers.delete(theme)
    const layersToHide = Array.from(allGroupLayers.values())

    felt.setLayerGroupVisibility({
      show: [groupVisible],
      hide: layersToHide,
    });

    const layers = await felt.getLayers();
    const elements = await felt.getLegendItems();

    const legendItems = await felt.getLegendItems({
      layerIds: ["mK7Y2v8oRvivzTyaYKskXA"],
    });

    debugger;

    felt.setLayerGroupLegendVisibility({
      show: [groupVisible],
      hide: layersToHide,
    })

    felt.setLayerVisibility({
      hide: ["mK7Y2v8oRvivzTyaYKskXA"]
    })

    felt.setLegendItemVisibility({
      hide: [
        { layerId: "mK7Y2v8oRvivzTyaYKskXA", id: "98aed8da-ff28-46f8-afcd-3c9a60ab245c--0-R" },
        { layerId: "mK7Y2v8oRvivzTyaYKskXA", id: "98aed8da-ff28-46f8-afcd-3c9a60ab245c--0-E" },
        { layerId: "mK7Y2v8oRvivzTyaYKskXA", id: "98aed8da-ff28-46f8-afcd-3c9a60ab245c--0-C" },
        { layerId: "mK7Y2v8oRvivzTyaYKskXA", id: "98aed8da-ff28-46f8-afcd-3c9a60ab245c--0-F" },
        { layerId: "mK7Y2v8oRvivzTyaYKskXA", id: "98aed8da-ff28-46f8-afcd-3c9a60ab245c--0-I" }
      ]
    });
  }

  return (
    <Theme appearance="light">
      <Stack direction="row" height="100vh" overflow="hidden" gap={0}>
        <Stack
          gap={0}
          borderRight="1px solid"
          borderColor="border.muted"
          userSelect="none"
          w="320px"
          flexShrink={0}
          flexGrow={0}
          overflow="hidden"
        >
          <ThemeSelect
            currentTheme={currentTheme}
            onThemeClick={handleClick}
          />
          <FeltSidebar felt={felt} />
        </Stack>
        <Box
          bg="gray.100"
          css={{
            "& > iframe": {
              position: "relative",
              zIndex: 1,
            },
          }}
          position="relative"
          ref={mapRef}
          flex={1}
        >
          {!felt && (
            <Center zIndex={0} position="absolute" inset={0}>
              <VStack gap={3}>
                <Spinner color="fg.subtle" />
                <Text fontSize="sm" color="fg.subtle">
                  Loading map&hellip;
                </Text>
              </VStack>
            </Center>
          )}
        </Box>
      </Stack>
    </Theme>
  );
}

function FeltSidebar({ felt }: { felt: FeltController | null }) {
  return (
    <Stack
      flex={1}
      gap={0}
      fontSize="md"
      overflow="hidden"
      separator={
        <Separator borderColor="border.muted" css={{ margin: "0!important" }} />
      }
    >
      {felt ? (
        <FeltContext.Provider value={felt}>
          <Stack flex={1} gap={0} overflow="hidden">
            <LayersList />
          </Stack>

          <Stack flexGrow={0} flexShrink={0} gap={0} overflow="hidden">
            <ViewportInfo />
          </Stack>
        </FeltContext.Provider>
      ) : (
        <VStack py={8} gap={3}>
          <Spinner color="fg.subtle" alignSelf="center" />
          <Text fontSize="sm" color="fg.subtle">
            Loading&hellip;
          </Text>
        </VStack>
      )}
    </Stack>
  );
}
