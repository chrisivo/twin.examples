import { createGlobalStyle } from "styled-components";
import tw from "twin.macro";

export default createGlobalStyle`
  /*
  Sections
  */

  /*--------------------------------------
  Table of Contents
  ========================================

  01. Top Bar
  02. Menu bar
  03. Worksapce
  04. Breadcrumb
  05. Footer
  06. Sidebar
  07. Footer Bar
  08. Overlay
  --------------------------------------*/

  /*
  Top Bar
  */
  .top-bar {
    ${tw`fixed z-30 top-0 flex items-center w-full h-20 px-4 bg-foreground shadow`}

    .menu-toggler {
      ${tw`mr-2 text-3xl leading-none text-muted`}

      &:hover {
        ${tw`text-primary`}
      }
    }

    .brand {
      ${tw`font-heading font-bold text-2xl uppercase`}
    }
  }

  // @media screen(md) {
  //   .top-bar {
  //     ${tw`px-10`}
  //   }
  // }

  [dir="rtl"] {
    .top-bar {
      .menu-toggler {
        ${tw`mr-0 ml-2`}
      }
    }
  }

  /*
  Menu Bar
  */
  .dark .menu-bar {
    &.menu_branded {
      .menu-items {
        .link {
          ${tw`border-primary-900`}

          &.active {
            &:before {
              ${tw`bg-gray-800`}
            }
          }
        }
      }
    }
  }

  .menu-bar {
    ${tw`absolute z-20 top-0 bottom-0 left-0 mt-20 leading-none`}
    transition-property: margin, left, right;
    ${tw`duration-200 ease-linear`}

    &.menu-sticky {
      ${tw`fixed`}
    }

    .menu-header {
      a {
        ${tw`text-normal`}
      }
    }

    /*
    Menu Items
    */
    .menu-items {
      ${tw`relative z-20 h-full bg-foreground shadow overflow-x-hidden overflow-y-auto`}
      width: 130px;
      transition-property: width;
      ${tw`duration-200 ease-linear`}

      .link {
        ${tw`relative block border-b border-divider px-5 py-6 text-center text-normal`}
        transition-property: color;
        ${tw`duration-200 ease-linear`}

        .icon {
          ${tw`inline-block text-4xl leading-none`}
        }

        .title {
          ${tw`block mt-2 opacity-100`}
          ${tw`transition-all duration-200 ease-linear`}
        }

        &:hover {
          ${tw`text-primary`}
        }

        &.active {
          ${tw`text-primary`}

          &:before {
            ${tw`absolute top-0 bottom-0 left-0 my-4 block bg-primary rounded-tr-full rounded-br-full`}
            content: "";
            width: 5px;
          }
        }
      }
    }

    /*
    Menu Detail
    */
    .menu-detail {
      ${tw`absolute z-10 top-0 bottom-0 p-10 bg-foreground overflow-y-scroll`}
      left: -220px;
      width: 220px;
      ${tw`transition-all duration-200 ease-linear`}

      &.open {
        ${tw`shadow`}
        left: 130px;
      }

      a {
        ${tw`flex items-center mb-5 text-normal whitespace-nowrap`}

        span {
          ${tw`mr-2 text-2xl leading-none text-muted`}
        }

        &:hover,
        &.active {
          ${tw`text-primary`}

          span {
            ${tw`text-primary`}
          }
        }
      }

      hr {
        ${tw`mb-5`}
      }

      [data-toggle="collapse"] {
        .collapse-indicator {
          ${tw`transition-all duration-200 ease-linear`}
        }

        &.active {
          .collapse-indicator {
            ${tw`transform -rotate-180`}
          }
        }
      }

      .collapse {
        ${tw`ml-8`}
      }

      h6 {
        ${tw`mb-3`}
      }
    }

    &.menu-hidden {
      margin-left: -130px;
      left: -130px;
    }

    &.menu-icon-only {
      .menu-items {
        width: 80px;

        .link {
          .title {
            ${tw`opacity-0 mt-0`}
            font-size: 0;
          }
        }
      }

      .menu-detail {
        &.open {
          left: 80px;
        }
      }

      &.menu-hidden {
        margin-left: -80px;
        left: -80px;
      }
    }

    &.menu-wide {
      .menu-items {
        width: 310px;

        .link {
          ${tw`flex items-center border-b-0 px-8 py-2`}

          .icon {
            ${tw`text-2xl leading-none`}
          }

          .title {
            ${tw`inline ml-2 mt-0`}
          }

          &.active {
            &:before {
              ${tw`my-2`}
            }
          }
        }

        .menu-detail {
          ${tw`static pt-0 pr-7 pb-0 pl-16 w-full`}

          .menu-detail-wrapper {
            ${tw`pt-3 pb-0 overflow-y-scroll`}
          }

          &.open {
            ${tw`shadow-none`}
          }
        }
      }

      &.menu-hidden {
        margin-left: -310px;
        left: -310px;
      }
    }

    &.menu_branded {
      .menu-header {
        div {
          ${tw`text-component`}
        }

        hr {
          ${tw`border-primary-700`}
        }
      }

      .menu-items {
        ${tw`bg-primary`}

        .link {
          ${tw`border-primary-700 text-component text-opacity-80`}

          &:hover {
            ${tw`text-component`}
          }

          &.active {
            ${tw`text-component`}

            &:before {
              ${tw`bg-white`}
            }
          }
        }
      }

      &.menu-wide {
        .menu-detail {
          ${tw`bg-primary`}

          a {
            ${tw`text-component text-opacity-80`}

            span {
              ${tw`text-component text-opacity-80`}
            }

            &:hover,
            &.active {
              ${tw`text-component`}

              span {
                ${tw`text-component`}
              }
            }
          }

          hr {
            ${tw`border-primary-700`}
          }

          h6 {
            ${tw`text-component`}
          }
        }
      }
    }
  }

  // @media screen(sm) {
  //   .menu-bar {
  //     ${tw`relative`}

  //     &.menu-sticky {
  //       ${tw`sticky top-20`}
  //       height: calc(100vh - 5rem);
  //     }

  //     .menu-detail {
  //       left: -300px;
  //       width: 300px;
  //     }
  //   }
  // }

  @media (min-width: 640px) {
    .menu-bar {
      ${tw`relative`}

      &.menu-sticky {
        ${tw`sticky top-20`}
        height: calc(100vh - 5rem);
      }

      .menu-detail {
        left: -300px;
        width: 300px;
      }
    }

  }

  [dir="rtl"] {
    .menu-bar {
      ${tw`left-auto right-0`}

      .menu-items {
        a {
          &.active {
            &:before {
              ${tw`left-auto right-0 rounded-tr-none rounded-br-none rounded-tl-full rounded-bl-full`}
            }
          }
        }
      }

      .menu-detail {
        ${tw`left-auto`}
        right: -220px;

        &.open {
          ${tw`left-auto`}
          right: 130px;
        }

        a {
          span {
            ${tw`mr-0 ml-2`}
          }
        }

        .collapse {
          ${tw`ml-0 mr-8`}
        }
      }

      &.menu-hidden {
        ${tw`ml-0 left-auto`}
        margin-right: -130px;
        right: -130px;
      }

      &.menu-icon-only {
        .menu-detail {
          &.open {
            ${tw`left-auto`}
            right: 80px;
          }
        }

        &.menu-hidden {
          ${tw`ml-0 left-auto`}
          margin-right: -80px;
          right: -80px;
        }
      }

      &.menu-wide {
        .menu-items {
          .link {
            .title {
              ${tw`ml-0 mr-2`}
            }
          }

          .menu-detail {
            ${tw`pr-16 pl-7`}
          }
        }

        &.menu-hidden {
          ${tw`ml-0 left-auto`}
          margin-right: -310px;
          right: -310px;
        }
      }
    }

    // @media screen(sm) {
    //   .menu-bar {
    //     .menu-detail {
    //       ${tw`left-auto`}
    //       right: -300px;
    //     }
    //   }
    // }
  }

  /* 
  Workspace
  */
  .workspace {
    ${tw`relative flex flex-auto flex-col mt-20 px-5 pt-5 pb-5`}

    &_with-sidebar {
      ${tw`overflow-y-auto`}
      height: calc(100vh - 5rem);
    }
  }

  // @media screen(md) {
  //   .workspace {
  //     ${tw`px-10 pt-10`}
  //   }
  // }

  /*
  Breadcrumb
  */
  .breadcrumb {
    ${tw`mb-5`}

    ul {
      ${tw`flex items-center`}

      li,
      a {
        ${tw`flex items-center`}
      }

      .divider {
        ${tw`mx-1 text-muted`}
      }

      a {
        ${tw`text-muted`}

        &:hover {
          ${tw`text-primary`}
        }
      }
    }

    &_alt {
      ${tw`rounded-xl shadow bg-foreground bg-opacity-20`}

      ul {
        ${tw`flex items-center`}
      }
    }
  }

  /* 
  Footer
  */
  .dark .footer {
    .divider {
      ${tw`text-gray-700`}
    }
  }

  .footer {
    ${tw`flex flex-auto items-center border-t border-border mt-10 py-5 leading-none font-heading text-sm`}

    nav {
      ${tw`ml-auto`}
    }

    .divider {
      ${tw`mx-2 text-gray-300`}
    }
  }

  [dir="rtl"] {
    .footer {
      nav {
        ${tw`ml-0 mr-auto`}
      }
    }
  }

  /*
  Sidebar
  */
  .dark .sidebar {
    &_customizer {
      .themes {
        button {
          .color {
            ${tw`border-gray-900`}
          }
        }
      }
    }
  }

  .sidebar {
    ${tw`fixed flex flex-col flex-shrink-0 z-20 top-20 bottom-0 bg-foreground shadow`}
    right: -320px;
    width: 320px;
    transition-property: right, left;
    ${tw`duration-200 ease-linear`}

    &.open {
      transition-property: right, left;
      ${tw`right-0 duration-200 ease-linear`}
    }

    &_customizer {
      ${tw`top-0 z-50`}

      .sidebar-toggler {
        ${tw`top-1/2 -mt-5 w-14 text-2xl bg-primary text-component rounded-tl-xl rounded-bl-xl`}
      }

      .themes {
        ${tw`grid grid-cols-3 gap-4 mt-5`}

        button {
          ${tw`flex flex-col items-center space-y-2 p-4 border border-divider rounded-lg shadow-lg`}

          &:hover,
          &.active {
            ${tw`border-primary`}
          }

          .color {
            ${tw`w-8 h-8 border-2 border-white rounded-full shadow-md`}
          }
        }

        &.fonts {
          ${tw`grid-cols-1`}

          button {
            ${tw`items-start space-y-0 text-left`}
          }
        }
      }
    }
  }

  .sidebar-toggler {
    ${tw`absolute flex items-center justify-center top-0 w-10 h-10 bg-foreground shadow p-2 text-4xl leading-none`}
    right: 100%;
  }


  // @media screen(lg) {
  //   .sidebar {
  //     &:not(.sidebar_customizer) {
  //       ${tw`sticky z-10`}
  //       height: calc(100vh - 5rem);

  //       .sidebar-toggler {
  //         ${tw`hidden`}
  //       }
  //     }
  //   }
  // }

  [dir="rtl"] {
    .sidebar {
      ${tw`right-auto`}
      left: -320px;

      &.open {
        ${tw`right-auto left-0`}
      }

      &_customizer {
        .sidebar-toggler {
          ${tw`rounded-tl-none rounded-bl-none rounded-tr-xl rounded-br-xl`}
        }
      }
    }
    .sidebar-toggler {
      ${tw`right-auto`}
      left: 100%;
    }
  }

  /*
  Footer Bar
  */
  .footer-bar {
    ${tw`fixed z-10 right-0 bottom-0 left-0 bg-foreground flex items-center h-20 px-5 shadow`}
    transition-property: left, right;
    ${tw`duration-200 ease-linear`}
  }

  @media (min-width: 640px) {
    .footer-bar {
      ${tw`px-10`}
      left: 130px;

      &.absolute {
        ${tw`left-0 right-0`}
      }
    }

    .menu-icon-only {
      .footer-bar {
        left: 80px;

        &.absolute {
          ${tw`left-0 right-0`}
        }
      }
    }

    .menu-wide {
      .footer-bar {
        left: 310px;

        &.absolute {
          ${tw`left-0 right-0`}
        }
      }
    }
  }

  .menu-hidden {
    .footer-bar {
      ${tw`left-0 right-0`}
    }
  }

  [dir="rtl"] {
    // @media screen(sm) {
    //   .footer-bar {
    //     ${tw`left-0`}
    //     right: 130px;

    //     &.absolute {
    //       ${tw`left-0 right-0`}
    //     }
    //   }
    // }

    // @media screen(sm) {
    //   &.menu-icon-only {
    //     .footer-bar {
    //       ${tw`left-0`}
    //       right: 80px;

    //       &.absolute {
    //         ${tw`left-0 right-0`}
    //       }
    //     }
    //   }

    //   &.menu-wide {
    //     .footer-bar {
    //       ${tw`left-0`}
    //       right: 310px;

    //       &.absolute {
    //         ${tw`left-0 right-0`}
    //       }
    //     }
    //   }
    // }

    &.menu-hidden {
      .footer-bar {
        ${tw`left-0 right-0`}
      }
    }
  }

  /*
  Overlay
  */
  .dark .overlay {
    &.active {
      ${tw`opacity-30`}
    }
  }

  .overlay {
    ${tw`fixed top-0 right-0 bottom-0 left-0 bg-black opacity-0 z-40`}
    ${tw`transition-opacity duration-200 ease-linear`}

    &.active {
      ${tw`opacity-10`}
    }

    &_workspace {
      ${tw`z-10`}
    }
  }
`;
