"use client";

import type { ReactElement } from "react";

// Bespoke per-topic Interactive-tab widgets, keyed by topic id.
// (Authored by the widget-build pass.)
export const widgets: Record<string, () => ReactElement> = {};
