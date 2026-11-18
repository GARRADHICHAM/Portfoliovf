// Shared, mutable state between the DOM (scroll / pointer) and the WebGL scene.
// Deliberately not React state: the 3D scene reads it every frame inside
// useFrame, so mutating it never triggers React re-renders.

/** Page sections, top to bottom. Each one maps to a layer of the network. */
export const SECTIONS = [
  "hero",
  "about",
  "experience",
  "projects",
  "certifications",
  "beyond",
  "contact",
] as const;

export type SectionId = (typeof SECTIONS)[number];

export const sceneState = {
  /**
   * Continuous scroll position expressed in layers: 0 = input layer (hero)
   * centred on screen, SECTIONS.length - 1 = output layer (contact).
   */
  layerPos: 0,
  /** Pointer position normalised to [-1, 1] on both axes. */
  mouse: { x: 0, y: 0 },
  reducedMotion: false,
};
