
      import { html, css, LitElement } from 'https://unpkg.com/lit-element/lit-element.js?module';
//    import '../hamenu4/dile-menu-hamburger.mjs'
      import './index_v41.mjs'

   class MyHeaderComponent extends LitElement {

   //  -------------------------------------------------------------------------

   static get properties() {
     return {
       aPageName: { type: String,  reflect: true },
       };
 } // eof get properties( ) { ... }
   // ------------------------------------------------------------------------

   static get styles() {

       return css`

:root {
    --Primary-color: whitesmoke: ;
    --Hamburger-color: blue: ;
    --Overlay-color: rgb(198 210 222): ;
    --MenuBackground-color: rgb(198 210 222): ;
    --MenuBackground-opacity: 1.0: ;
    --Menu-speed: 0.5s: ;
}
:root {
    --GlobalFontFamily: "Arial, Helvetica, sans-serif": ;
    --HeaderFooterBGColor: rgb(198 210 222): ;
    --NextMeetingDate: "02/09/2023": ;
    --GlobalMaxWidth: 900px: ;
    --CalloutIconCheck: "\f14a  \A": ;
    --CalloutIconCheck: "\f0da  \A": ;
    --CalloutIconCheck: "\f0a4  \A": ;
    --CalloutIconCheck: "\f105  \A": ;
    --CalloutIconCheck: "\f328  \A": ;
    --CalloutIconCheck: "\f0ca  \A": ;
    --CalloutIconCheck: "\f064  \A": ;
    --CalloutIconCheck: "\f0ae  \A": ;
    --CalloutIconCheck: "\f35a  \A": ;
    --CalloutIconFontFamily: "Font Awesome 5 Free": ;
}
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Arial, Helvetica, sans-serif";
    font-size: 16px;
}
.Header {
    background: var(--HeaderFooterBGColor);
    border-bottom: 0px #000 solid;
    width: 100%;
    height: 70px;
    position: fixed;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--GlobalMaxWidth);
    margin: auto;
}
.container {
    padding: 0;
    height: 100vh;
    max-height: 99%;
}
body {
    background-color: cornflowerblue;
}
html {
    max-width: var(--GlobalMaxWidth);
    margin: auto;
}
.MenuWrap {
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1;
    display: none;
}
.Logo {
    padding: 0px 0px 10px 10px;
}
.HeaderSpacer {
    flex: 1;
}
.HeaderNavList {
    list-style: none;
    margin-right: 30px;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    font-family: "Arial, Helvetica, sans-serif";
}
.HeaderNavListItemCTA {
    animation: wiggle 400ms 2s 8 ease-out none;
}
.HeaderNavListItemCTA a {
    color: white;
    background: blue;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-family: "Arial, Helvetica, sans-serif";
}
.next-meeting-date::after {
    content: var(--NextMeetingDate);
}
.HeaderNavListItem1 a, .HeaderNavListItem2 a {
    color: black;
    font-weight: bold;
    font-family: "Arial, Helvetica, sans-serif";
    text-decoration: none;
    margin: 8px 0;
    padding: 25px;
}
.LogoText {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 50px;
    font-weight: 600;
    color: white;
    letter-spacing: 2px;
    text-shadow: 3px 3px 3px black;
    margin: 0px 0px 0px 20px;
}
/* @media only screen and (max-width:1900px) and (min-width:1100px) */
.device-text {
    font-size: 15px;
    font-weight: 600;
    color: blue;
    text-shadow: 0px 0px 0px black;
    padding-bottom: 20px;
}
/* @media only screen and (max-width:1900px) and (min-width:1100px) */
.device-text::after {
    content: "\  [ laptop ]";
}
.MenuWrap .Toggler {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 2;
    cursor: pointer;
    width: 50px;
    height: 50px;
    opacity: 0;
}
.MenuWrap .Hamburger {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
    width: 60px;
    height: 60px;
    padding: 20px 16px 10px 16px;
    background: var(--Primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
}
.MenuWrap .Menu {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    visibility: hidden;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 110px 0px 150px 185px;
}
.MenuWrap .Menu > div {
    background: var(--Overlay-color);
    opacity: 0.95;
    border-radius: 10%;
    width: 150vw;
    height: 350vw;
    display: flex;
    flex: none;
    align-items: center;
    justify-content: left;
    padding-left: 210px;
    margin-top: -500px;
    transform: scale(0);
    transition: all var(--Menu-speed) ease;
}
.MenuWrap .Menu > div > div {
    text-align: center;
    max-width: 90vw;
    max-height: 100vh;
    opacity: 0;
    transition: opacity var(--Menu-speed) ease;
    border: blue solid 3px;
    border-radius: 0%;
    box-shadow: 4px 4px 2px #424242;
}
.MenuWrap .Menu > div > div > ul > li {
    list-style: none;
    color: blue;
    font-weight: 800;
    font-size: 1.5rem;
    padding: 1rem;
    background-color: var(--MenuBackground-color);
    opacity: var(--MenuBackground-opacity);
}
.MenuWrap .Menu > div > div > ul > li > a {
    font-size: 1.2rem;
    font-weight: 800;
    color: inherit;
    text-decoration: none;
    transition: color 0.1s ease;
}
.MenuListItemLine hr {
    position: relative;
    border: none;
    height: 2px;
    width: 110px;
    background: blue;
    margin: 8px 0px 0px 0px;
}
.MenuWrap .Hamburger > div {
    position: relative;
    flex: none;
    width: 100%;
    height: 3px;
    background: blue;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
}
.MenuWrap .Hamburger > div::before, .MenuWrap .Hamburger > div::after {
    content: "";
    position: absolute;
    z-index: 1;
    top: -10px;
    width: 100%;
    height: 3px;
    background: inherit;
}
.MenuWrap .Hamburger > div::after {
    top: 10px;
}

`
 } // eof get styles() { `...` }
   // ------------------------------------------------------------------------

          render() {

    return html`

<div class="container">

        <-- Header -->
        <div class="Header">

                <div class="MenuWrap">

                    <input class="Toggler" type="checkbox">

                	<my-menu-component page="{aPageName}"></my-menu-component>

    <!--        	<div class="Menu">
                      <div>
                        <div>
                            <ul class="MenuList">
                                <li class="MenuListItem" id="MenuBlank"></li>
                                <li class="MenuListItem" id="HomeLink" ><a href="/client1/home/index.html" >Home</a></li>
                                <li class="MenuListItemLine" id="HomeLinkLine" ><hr></li>
                                <li class="MenuListItem" id="MembersLink" ><a href="/client1/home/members/members3.html" >Members Listing</a></li>
                                <li class="MenuListItem" id="ContactLink" ><a href="#">Contact Sheet</a></li>
                                <li class="MenuListItem" id="BiosLink"><a href="#">Bios</a></li>
                                <li class="MenuListItemLine" id="MembersLinkLine"><hr color="blue"></li>
                                <li class="MenuListItem" id="MembersProjectsLink"><a href="/client1/home/members-projects/members-projects.html">Members' Projects</a></li>
                                <li class="MenuListItem" id="ProjectDetailsLink"><a href="#">Project Details</a></li>
                                <li class="MenuListItemLine" id="MembersProjectsLinkLine"><hr color="blue"></li>
                                <li class="MenuListItem" id="GuruLink"><a href="#">Guru Mail</a></li>
                                <li class="MenuListItem" id="SupportLink"><a href="#">Support</a></li>
                                <li class="MenuListItem" id="LicenseLink"><a href="#">License</a></li>
                                <li class="MenuListItemLine" id="MtgLocLinkLine"><hr></li>
                                <li class="MenuListItem" id="MtgLocLink"><a href="#">Meeting Location</a></li>
                                <li class="MenuListItemLine" id="LoginLinkLine"><hr></li>
                                <li class="MenuListItem" id="LoginLink"><a href="/client1/home/login/login.html">Login</a></li>
                                <li class="MenuListItem" id="MenuBlank"></li>
                            </ul>
                         </div>
                      </div>
                    </div>
                    <!-- /class menu -->
    -->
                </div>
                <!-- /class MenuWrap -->

                <div class="Logo">









                    <span class="LogoText">iodd</span>
                    <span class="device-text"></span>
                </div>
                <!-- /class Logo -->

                <div class="HeaderSpacer"></div>

                <div id="new-div container" >

<!--                 <div class="new-div">
                        <table width="100%">

                            <tbody class="HeaderNavList"></tbody>
                            <tbody><tr>                                <!-- 30107.01.1 RAM Remove extra <tbody>) -->
                                <td class="Logo">
                                    <span class="LogoText">iodd</span>
                                    <span class="DeviceText"></span>
                                </td>
                                <td class="HeaderSpacer"></td>
                                <td class="HeaderNavListItemBack"  ><a href="/1c1_iodd-home-app/index.html"         title="Go back Home"><img                      src="../assets/images/btnBack.gif"></a></td>
                                <td class="HeaderNavListItemHome"  ><a href="/1c1_iodd-home-app/index.html"         title="Go back Home">Home</a></td>
                                <td class="HeaderNavListItemMtgLoc"><a href="#" target="_blank"                     title="Next Meeting">Meeting Location</a></td>
                                <td class="HeaderNavListItemCTA"   ><a href="#" target="_blank"                     title="Next Meeting"><span class="NextTag">Next </span>Meeting <span class="next-meeting-date"></span></a></td>
                                <td class="HeaderNavListItemAvatar"><a href="../1c1_iodd-home-app/login/login.html" title="Log Out"     ><img  class="AvatarImage" src="../assets/images/RJS-Avatar.gif"></a>
                                                                    <a href="#"><img class="PencilImage"                                                           src="../assets/images/pencilDots.gif"></a>&nbsp;
                                </td>
                            </tr>
                            </tbody>
                        </table>
-->
<!--            </div> -->
                <!-- /class new-div -->

                              <ul class="HeaderNavList">
                                <li class="HeaderNavListItem2"  ><a title="Next Meeting" href="#" target="_blank">Meeting Location</a></li>
                                <li class="HeaderNavListItemCTA"><a title="Next Meeting" href="#" target="_blank">Next Meeting <span class="next-meeting-date"></span></a></li>
                              </ul>
            </div>
            <!-- /id new-div container -->

        </div>
        <!-- /class Header -->

     </div>
     <!-- /class container -->
`
 } // eof render() { `...` }
   //  -----------------------------------------------------------------------

          firstUpdated() {

 } // eof firstUpdated() { `...` }
   //  -------------------------------------------------------------------------
}  // eoc MyHeaderComponent
//---------------------------------------------------------------------------------------

           customElements.define( 'my-header', MyHeaderComponent );                                      // Enables use of <my-component> tag in parent HTML file



