//---------------------------------------------------------------------------------------------------
 
aTests='live in Browser'
//     aTests='test1 in NodeJS'

  if ( aTests.match( /test1/ ) ) { 

       var  pJSON    =  parseJSON( '../json/db_v2.json.js' )
       var  aHTML    =  fmtMembersProjects(  pJSON )

            console.log( aHTML )
            }

//---------------------------------------------------------------------------------------------------

function  fmtMembersProjectsMobile( pJSON ) {     
       var  mMembers_projects =  pJSON.members_projects

//       var  aHTML    =  mMembers_projects.map( fmtMember ).join( "\n" )
//       var  aHTML    =  mMembers_projects.sort(sortitem).map( fmtMemberProject ).join( "\n" )
         var  aHTML    =  mMembers_projects.map( fmtMemberProjectMobile ).join( "\n" )
//       var  mHTMLs=[];  mMembers_projects.forEach( ( pMember, i ) => { fmtMember( pMember, i ) } ); aHTML = mHTMLs.join( "\n" ) 
    return  aHTML
            
//     ---  -------  =  -----------------------------------

  function  fmtMemberProjectMobile( pMember, i ) {

       var  aClass = i % 2 == 1 ? "row-even" : "row-odd"
//     var  aClass = "class=row-" + ( i % 2 ? "even" : "odd" )
//     var  aClass   =   (  `class="row-even"` )

       var  aMI      =     pMember.Middlename;  aMI = ( aMI  > "" ) ?   ` ${ aMI.substr(0,1) }. ` : ""
       var  aNameBR    = `${ pMember.FirstName }${aMI} <br> ${ pMember.LastName }`
       var  aName    =   `${ pMember.FirstName }${aMI} ${ pMember.LastName }`
//     var  aPhone   =     pMember.Phone1 + ( pMember.Phone2 > ""   ? `, ${ pMember.Phone2  }` : "" )
//          aPhone   =     aPhone != "null" ? aPhone : ""
       var  aPhone1  =     pMember.Phone1
            aPhone1  =     aPhone1 != null ? aPhone1 : ""
       var  aPhone2  =     pMember.Phone2
            aPhone2  =     aPhone2 != null ? aPhone2 : ""
       var  aEmail   =     pMember.Email
       var  aAddress =     pMember.Address1
       var  aCity    =     pMember.City
       var  aState   =     pMember.State
       var  aZip     =     pMember.Zip
       var  aProjName =    pMember.ProjectName
       var  aClient  =     pMember.Client
       var  aClientWeb =   pMember.ClientWeb
       var  aLocation =    pMember.Location
       var  aProjType =    pMember.ProjectType
       var  aStyle    =    pMember.Style
       var  aRole    =     pMember.Role
       var  aDates   =     pMember.Dates
       var  aDuration =    pMember.Duration
       var  aBio     =     pMember.Bio
       var  aDescription = pMember.Description
       var  aSort    =     pMember.Sort
       var  aRow     = 

       `  <tr Class="${ aClass }" id="R${ `${ i + 1 }`.padStart( 3, "0" ) }">\n`

       + `       <div class="members-projects-mobile">\n`
       + `       <table class="main-table-mobile">\n`
       + `       <tbody>\n`
       + `            <tr>\n`
       + `            <td colspan="3" valign="top" align="center">\n`
       + `                 <table class="${ aStyle}" cellspacing="0" cellpadding="10" align="left">\n`
       + `                 <tbody>\n`
       + `                 <tr>\n`
       + `                      <!--NAME-->\n`
       + `                      <td class="members-name-mobile">${ aNameBR }</td>\n`
       + `                      <!--ADDRESS, PHONE, EMAIL-->\n`
       + `                      <td>\n`
       + `                      <table class="members-address-mobile" width="100%" cellspacing="0" cellpadding="0" align="center">\n`
       + `                           <tbody>\n`
       + `                           <tr><td class="members-address-mobile-item">${ aAddress }</td></tr>\n`
       + `                           <tr><td class="members-mobile-city">${ aCity }, ${ aState } ${ aZip }</td></tr>\n`
       + `                           <tr><td class="members-mobile-phone">${ aPhone1 }</td></tr>\n`
       + `                           <tr><td class="members-mobile-email"><a href="http://mailto:${ aEmail }">${ aEmail }</a></td></tr>\n`
       + `                      </tbody></table>\n`
       + `                      </td>\n`
       + `                 </tr>\n`
       + `                 <tr>\n`
       + `                      <!--BIO-->\n`
       + `                  <table class="members-resume-table-mobile" ><tr>\n`
       + `                      <td class="members-resume-mobile" valign="top">${ aBio }</td>\n`
       + `                  </tr></table>\n`     
       + `                 </tr>\n`
       + `                 <tr><td>&nbsp;</td></tr>\n`
       + `                 <tr><td class="project-title-mobile" colspan="4">Project(s):&nbsp;<span class="project-title-line-mobile"><hr></span></td></tr>\n`
       + `                 </tbody>\n`
       + `                 </table>\n`
       + `                 <!--END TABLE STARTING ON LINE 118-->\n`
       + `            </td>\n`
       + `            </tr>\n`
       +`    <tr>`
+`    <td valign="top">`
+`	<tr>`
+`	<td width="50%">`
+`	    <table class="project-summary-mobile-left"  width="100%">`
+`		<tr><td valign="top">Project: ${ aProjName }</td></tr>`
+`		<tr><td valign="top">Owner: ${ aClient }</td></tr>`
+`		<tr><td valign="top">Owner Web: <a href="${ aClientWeb }">${ aClientWeb }</a></td></tr>`
+`		<tr><td valign="top">Dates: ${aDates }</td></tr>`
+`	    </table>`
+`	</td>`
+`	<td width="50%">`
+`	    <table class="project-summary-mobile-right" width="100%">`
+`		<tr><td valign="top">Location: ${ aLocation }</td></tr>`
+`		<tr><td valign="top">Role: ${ aRole }</td></tr>`
+`		<tr><td valign="top">Duration: ${ aDuration }</td></tr>`
+`		<tr><td valign="top">Type: ${ aProjType }</td></tr>`
+`	    </table>`
+`	</td>`
+`    </td>`
+`    </tr>`
+`    <tr class="project-details-row-mobile">`
+`	<td class="project-details-mobile" colspan="2">${ aDescription }</td>`
+`    </tr>`
+`    <tr><td colspan="4"><hr></td></tr>`
+`</tbody>`
+`</table>`
+`</div>`             

       

//          mHTMLs.push( aRow )                  
     //aData = aHeadRow + aRow
     aData = aRow
     return aData
            }   // eof  fmtMember
//     ---  -------  =  ----------------------------------
            }   // eof  fmtMembers
//--------  -------  =  -------------------------------------------------------

  function  parseJSON(  aFile ) {
       var  pFS      =  require( 'fs' )
       var  aDir     =  __dirname
       var  aText    =  pFS.readFileSync( `${aDir}/${aFile}`, "ASCII" )
            aText    =  aText.replace( //g, "'" )
            aText    =  aText.replace( //g, "'" )

        if (aFile.match( /\.json$/)) {   
       var  pJSON    =  JSON.parse( aText )
            }
        if (aFile.match( /\.js$/)) {   
            eval( aText )    
            }

    return  pJSON
            }   // eof  parseJSON
//--------  -------  =  -------------------------------------------------------

function sortitem(a,b) {
     var aSort = String(51 - a.Sort).padStart(2,"0")
	return (a.LastName + a.FirstName + aSort) > (b.LastName + b.FirstName + aSort) ? 1 : -1
	}
//---------------------------------------------------------------------------------------------------

