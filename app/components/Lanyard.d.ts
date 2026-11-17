import React from "react";

export interface LanyardProps {
  frontImage?: string;
  backImage?: string;
  imageFit?: "cover" | "contain";
  imagePadding?: number;
  cardColor?: string;
  orientation?: "portrait" | "landscape";
  finish?: "glossy" | "matte" | "holographic";
  cornerRadius?: number;
  size?: number;
  anchor?: "left" | "center" | "right";
  strapLength?: number;
  strapImage?: string;
  strapColor?: string;
  strapWidth?: number;
  metal?: "silver" | "gold" | "black";
  gravity?: number;
  damping?: number;
  elasticity?: number;
  breeze?: number;
  interactive?: boolean;
  autoFlip?: boolean;
  intro?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

declare const Lanyard: React.ComponentType<LanyardProps>;
export default Lanyard;
