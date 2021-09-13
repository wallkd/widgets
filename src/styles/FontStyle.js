export default (style)=>{
  return(`

    .Dialog, * {
      font-family: ${style.fontFamily};
    }

    .FontSizeM {
      font-size: 1.2rem;
    }

    .FontSizeL {
      font-size: 1.4rem;
    }

    .FontSizeXL {
      font-size: 2.0rem;
    }

    .FontWeightBold {
      font-weight: bold;
    }

    .FontItalic {
      font-style: italic;
    }
  `)
}
