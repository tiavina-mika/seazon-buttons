import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 8,
});

export const colorsRoot = style({
  display: "flex",
  gap: 32,
});

export const content = style({
  width: 100,
  height: 100,
  borderRadius: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const color = style({
  width: 60,
  height: 60,
  borderRadius: 10,
})

export const text = style({
  fontSize: '12px !important'
})

export const colorsValue = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12
})

export const colorsRow = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8
})