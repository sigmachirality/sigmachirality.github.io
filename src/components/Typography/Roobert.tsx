import RoobertLight from '../../fonts/RoobertLight.woff2'
import RoobertRegular from '../../fonts/RoobertRegular.woff2'
import RoobertMedium from '../../fonts/RoobertMedium.woff2'
import RoobertSemiBold from '../../fonts/RoobertSemiBold.woff2'
import RoobertBold from '../../fonts/RoobertBold.woff2'
import RoobertHeavy from '../../fonts/RoobertHeavy.woff2'

const RoobertNormal : String = `
    /* Roobert Normal */
    @font-face {
        font-family: Roobert;
        font-weight: 200;
        font-style: normal;
        src: url(${RoobertLight}) format("woff2");
    }
    @font-face {
        font-family: Roobert;
        font-weight: 400;
        font-style: normal;
        src: url(${RoobertRegular}) format("woff2");
    }
    @font-face {
        font-family: Roobert;
        font-weight: 500;
        font-style: normal;
        src: url(${RoobertMedium}) format("woff2");
    }
    @font-face {
        font-family: Roobert;
        font-weight: 600;
        font-style: normal;
        src: url(${RoobertSemiBold}) format("woff2");
    }
    @font-face {
        font-family: Roobert;
        font-weight: 700;
        font-style: normal;
        src: url(${RoobertBold}) format("woff2");
    }
    @font-face {
        font-family: Roobert;
        font-weight: 800;
        font-style: normal;
        src: url(${RoobertHeavy}) format("woff2");
    }
`

import RoobertLightItalic from '../../fonts/RoobertLightItalic.woff2'
import RoobertRegularItalic from '../../fonts/RoobertRegularItalic.woff2'
import RoobertMediumItalic from '../../fonts/RoobertMediumItalic.woff2'
import RoobertSemiBoldItalic from '../../fonts/RoobertSemiBoldItalic.woff2'
import RoobertBoldItalic from '../../fonts/RoobertBoldItalic.woff2'
import RoobertHeavyItalic from '../../fonts/RoobertHeavyItalic.woff2'

const RoobertItalic : String = `
    @font-face {
        font-family: Roobert;
        font-weight: 200;
        font-style: italic;
        src: url(${RoobertLightItalic}) format("woff2");
    }
    @font-face {
        font-family: Roobert;
        font-weight: 400;
        font-style: italic;
        src: url(${RoobertRegularItalic}) format("woff2");
    }
    @font-face {
        font-family: Roobert;
        font-weight: 500;
        font-style: italic;
        src: url(${RoobertMediumItalic}) format("woff2");
    }
    @font-face {
        font-family: Roobert;
        font-weight: 600;
        font-style: italic;
        src: url(${RoobertSemiBoldItalic}) format("woff2");
    }
    @font-face {
        font-family: Roobert;
        font-weight: 700;
        font-style: italic;
        src: url(${RoobertBoldItalic}) format("woff2");
    }
    @font-face {
        font-family: Roobert;
        font-weight: 800;
        font-style: italic;
        src: url(${RoobertHeavyItalic}) format("woff2");
    }
`

export const Roobert : String = `
    ${RoobertNormal}
    ${RoobertItalic}
`