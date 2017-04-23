import React from 'react';

import { container, resume } from './Resume.css';

const Resume = () => (
  <div className={ container }>
    <section className ={ resume }>
      {
        React.createElement('div', {
        dangerouslySetInnerHTML: {
          __html: grossResumeHTML
        }
      })
      }
    </section>
  </div>
);

export default Resume;

const width = '100%'
const grossResumeHTML = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns:doc="http://xsltsl.org/xsl/documentation/1.0" xmlns:dt="http://xsltsl.org/date-time" xmlns:str="http://xsltsl.org/string" xmlns:msxsl="urn:schemas-microsoft-com:xslt">
  <head>
    <META http-equiv="Content-Type" content="text/html; charset=utf-16">
    <title>Luke Belliveau</title>
    <style type="text/css" id="static">
    /* Reset browser defaults *//* --------------------------------------------------------------
    Reset default browser CSS.
    Based on work by Eric Meyer:
    * http://meyerweb.com/eric/tools/css/reset/index.html
    -------------------------------------------------------------- *//* v1.0 | 20080212 */html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {margin: 0; padding: 0; border: 0; outline: 0; font-size: 100%; vertical-align: baseline; background: transparent;}
    body {line-height: 1; background: #FFF; text-align: left; font-feature-settings: "liga" 0; -moz-font-feature-settings: "liga" off;}
    ol, ul {list-style: none;}
    blockquote, q {quotes: none;}
    blockquote:before, blockquote:after, q:before, q:after {content: ''; content: none;}
    /* remember to define focus styles! */:focus {outline: 0;}
    /* remember to highlight inserts somehow! */ins {text-decoration: none;}
    del {text-decoration: line-through;}
    /* tables still need 'cellspacing="0"' in the markup */table {border-collapse: collapse; border-spacing: 0;}
    a img {border: none;}
    /* Typography */
    ul, li {list-style-type: disc; margin: 0 0 0 10px; padding: 0;}
    ul li {margin: 0 0 0 13px;}
    .clear {clear: both; height: 0;}
    br.clear {line-height: 0;}
    div.name {font-size: 15px; line-height: 17px; font-weight: bold; padding: 0; text-align: right; text-transform: uppercase; color: #369;}
    div.logo {display: none;}
    div.paragraph {position: relative;}
    div.heading {clear: both; font-weight: bold; text-transform: lowercase; color: #369;}
    div.address{position: relative; text-align: right; font-size: 0.917em; line-height: 1.25em; margin-top: 11px; color: #369;word-wrap: break-word; }
    div.address2 {position: relative; text-align: left; font-size: 0.917em; line-height: 1.25em;}
    span.jobtitle, span.companyname, span.degree, span.programline {font-weight: bold;}
    span.degree, span.programline, span.jobtitle, span.jobdates {color: #003363;}
    span.companyname {font-weight: normal!important;}
    .datesWrapper {float: right;}
    .table_wrapper {width: 100%; margin-top: 0;}
    table.twocol td {width: 50%;}
    table.skills, table.twocol {width: 100%;}
    table.skills th, table.skills td {width: 20%; text-align: center;}
    table.skills th {text-decoration: underline;}
    table.skills .skillname, table.skills .skillrating {text-align: left; width: 35%;}
    table.skills .skillrating {width: 20%;}
    table.skills .skillyears, table.skills .skilllast {width: 19%;}
    table.skills .pad1 {width: 5%;}
    table.skills .pad2, table.skills .pad3 {width: 1%;}
    span.paddedline {display: block;}
    .nodisplay {display: none;}
    div#document {color: #666;}
    div#document p font {color: #666!important;}
    div.SECTION_CNTC {padding-bottom: 6px;}
    td.twocol_2 {border-left:1px  solid #FEFDFD;}
    #document .bullet{font-size:1em;vertical-align:top;margin:0 3px;}
    div.adnlLnks li{margin:0;}
    div.adnlLnks{text-align: center}
    .adnlLnks li {list-style-type: disc;display:inline!important;}
    /*FIX for FORCEFULLY making left margin ZERO for CL*/
    div#document .sectionCL .paragraph {margin-top: 0!important;}
  </style>
    <style type="text/css" id="unparsed">
    div#document {line-height: {$FTLH}px;}
    div#document table {line-height: {$FTLH}px;}
    div#document.pagesize {width: {$DOCW}px;}
    div#document.vmargins {padding-top: {$TBMR}px; padding-bottom: {$TBMR}px;}
    div#document.hmargins {padding-left: {$LRMR}px; padding-right: {$LRMR}px;}
    div#document .section {margin-top: {$SCSP}px;}
    div#document div.firstsection {margin-top: 0;}
    div#document div.SECTION_CNTC {margin-top: 0;}
    div#document div.heading {margin-bottom: {$SHMB}px;}
    div#document div.paragraph {margin-top: {$PSPC}px;}
    div#document div.firstparagraph {margin-top: 0;}
    div#document .singlecolumn, div#document .maincolumn {margin-left: {$PIND}px; width: {$MACW}px;}
    .fontsize {font-size: {$FTSZ}px;}
    .fontface {font-family: {$FTFC};}
    div#document div.sectiontitle {font-size: {$HDSZ}px; line-height: {$HDLH}px;}
    div.name {font-size: {$NMSZ}px; line-height: {$NMLH}px;}
    div.address {font-size: {$CISZ}px; line-height: {$CILH}px; margin-top: {$CIMT}px;}
    div#document table.skills td {padding-top: {$TDMT}px;}

    /*FIX for Re-calculating width of singlecolumn for CL*/
    div#document .sectionCL .singlecolumn {margin-left: 0!important; width: 100%;}
    div.address2 {font-size: {$FTSZ}px; line-height: {$FTLH}px;}
  </style>
    <style type="text/css" id="dynamic">
    div#document {line-height: 14px;}
    div#document table {line-height: 14px;}
    div#document.pagesize {width: ${width};}
    div#document.vmargins {padding-top: 25px; padding-bottom: 25px;}
    div#document.hmargins {padding-left: 25px; padding-right: 25px;}
    div#document .section {margin-top: 4px;}
    div#document div.firstsection {margin-top: 0;}
    div#document div.SECTION_CNTC {margin-top: 0;}
    div#document div.heading {margin-bottom: 1px;}
    div#document div.paragraph {margin-top: 2px;}
    div#document div.firstparagraph {margin-top: 0;}
    div#document .singlecolumn, div#document .maincolumn {margin-left: 0px; width: ${width};}
    .fontsize {font-size: 11px;}
    .fontface {font-family: Tahoma;}
    div#document div.sectiontitle {font-size: 14px; line-height: 17px;}
    div.name {font-size: 31px; line-height: 43px;}
    div.address {font-size: 10px; line-height: 13px; margin-top: 5px;}
    div#document table.skills td {padding-top: 1px;}

    /*FIX for Re-calculating width of singlecolumn for CL*/
    div#document .sectionCL .singlecolumn {margin-left: 0!important; width: 100%;}
    div.address2 {font-size: 11px; line-height: 14px;}
  </style>
  <!-- INSERT BY TRANSFORMER. SELECTOR=head,LOCATION=append --><meta name="_globalsign-domain-verification" content="ZBniDfVDF5r6AMHLc1FJlg2LXz3IruNvy-I9v8rwEe" /></head>
  <body>
    <div id="document" class="fontsize fontface vmargins hmargins linespacing pagesize">
      <div id="SECTION_PICT936664905" class=" firstsection"></div>
      <div id="SECTION_NAME936664898" class="section">
        <div id="PARAGRAPH_936664898_1_616296783" class="paragraph PARAGRAPH_NAME firstparagraph">
        <div class="name">
          <span class="field" id="936664898FNAM1">Luke</span><span></span> <span class="field" id="936664898LNAM1">Belliveau</span>
        </div>
      </div>
      </div>
      <div id="SECTION_CNTC936664899" class="section SECTION_CNTC">
        <div id="PARAGRAPH_936664899_1_616296784" class="paragraph PARAGRAPH_CNTC firstparagraph">
        <div class="address">
          <span class="field" id="936664899STRT1">1936 North Clark Street Unit 907</span><span>,
          </span><span class="spaced field" id="936664899CITY1">Chicago</span><span>,
          </span><span class="spaced field" id="936664899STAT1">IL</span><span>
          </span><span class="spaced field" id="936664899ZIPC1">60614</span>
          <span> | </span>
          <span class="field" id="936664899HPHN1"></span>

          <span>(C) </span><span class="field" id="936664899CPHN1">603-233-0434</span>
          <span> | </span>
          <span dependency="EMAI" class="field" id="936664899EMAI1">luke.belliveau@gmail.com</span>





                </div>
            </div>
      </div>
      <div id="SECTION_SUMM936664902" class="section">
        <div class="heading">
        <div id="SECTNAME_SUMM936664902" class="sectiontitle">Professional Summary</div>
      </div>
        <div id="PARAGRAPH_936664902_1_616296790" class="paragraph firstparagraph">
        <div class="field singlecolumn" id="936664902FRFM1">Luke's principal passion and expertise is in front-end ecosystems, and has extensive
         experience building Java systems in enterprise environments. His development career
          has revolved around agile-driven teams, and he serves as a persistent advocate for these methodologies. He has a passion for teaching and knowledge-sharing, and is eager to get
          experience in as many domains and environments as he can. He has invested
          significant personal time into his front-end development skills, and is a VR hobbyist.</div>
      </div>
      </div>
      <div id="SECTION_EDUC936671525" class="section">
        <div class="heading">
        <div id="SECTNAME_EDUC936671525" class="sectiontitle">Education</div>
      </div>
        <div id="PARAGRAPH_936671525_1_616301643" class="paragraph firstparagraph">
        <div class="singlecolumn">
          <span class="paddedline">
            <span class="degree" id="936671525DGRE1">Bachelor of Science</span><span>: </span>
            <span class="programline" id="936671525STUY1">Computer Science</span><span></span>
            <span class="datesWrapper">
              <span class="jobdates" id="936671525GRYR1">2016</span>
            </span><br>
          </span>
          <span class="paddedline">
            <span class="companyname companyname_educ" id="936671525SCHO1">University of Connecticut</span><span></span>
            <span class="datesWrapper">
              <span class="joblocation jobcity" id="936671525SCIT1">Storrs</span><span>, </span>
              <span class="joblocation jobstate" id="936671525SSTA1">CT</span>
            </span><br>
          </span>

          <span class="field" id="936671525FRFM1">Luke graduated with a B.S. in Computer Science in May of 2016. Luke attained a major GPA of 3.67, and a cumulative GPA of 3.17. Among other projects such as building a compiler from scratch, creating a basic shell CLI, and contributing to OSS projects, Luke led an IBM-sponsored development team for his capstone project.</span>
        </div>
      </div>
      </div>
      <div id="SECTION_HILT936664903" class="section">
        <div class="heading">
        <div id="SECTNAME_HILT936664903" class="sectiontitle">Skills</div>
      </div>
        <div id="PARAGRAPH_936664903_1_616296791" class="paragraph firstparagraph">
        <div class="singlecolumn maincolumn">
          <table class="twocol">
            <tr>
              <td class="field twocol_1" id="936664903SKC11"><ul><li><strong>Programming Languages: </strong>Javascript (ES5/6), Java, C/C++, Swift</li><li><strong>Frameworks & Services:</strong> React, Redux, Flow, SpringMVC/Security, Node.js, SSO (Okta, Google, Facebook), </li><li><strong>Development Tools:</strong> IntellijJ IDEA, Eclipse, Xcode, Git, Gradle, webpack, Babel, npm, yarn<br></li></ul></td>
              <td class="field twocol_2" id="936664903SKC21"><ul><li><strong>Pipeline & Deployment tools:</strong> Bamboo, Heroku, Bluemix, SnapCI, GoCD, Jenkins</li></ul><ul><li><strong>Testing Frameworks & Tools:</strong> Mocha, Jasmine, Chai, Enzyme, Sinon, JUnit, Selenium</li><li><strong>Project Management Tools:</strong> Jira, Confluence, Rational Team Concert, Mingle</li></ul></td>
            </tr>
          </table>
        </div>
      </div>
      </div>
      <div id="SECTION_EXPR936664900" class="section">
        <div class="heading">
        <div id="SECTNAME_EXPR936664900" class="sectiontitle">Work History</div>
      </div>
        <div id="PARAGRAPH_936664900_1_616296785" class="paragraph firstparagraph">
        <div class="singlecolumn">
          <span class="paddedline" style="display: inline;">
            <span class="jobtitle" id="936664900JTIT1">Consultant Software Engineer</span><span></span>
            <span class="datesWrapper">
              <span class="jobdates" format="%b %Y" id="936664900JSTD1">Jun 2016</span><span> - </span>
              <span class="jobdates" format="%b %Y" id="936664900EDDT1">Current</span>
            </span>
          </span><br>
          <span class="paddedline">
            <span class="companyname" id="936664900COMP1">ThoughtWorks</span><span></span>
            <span class="datesWrapper">
              <span class="joblocation jobcity" id="936664900JCIT1">Chicago</span><span>, </span>
              <span class="joblocation jobstate" id="936664900JSTA1">Illinois</span><br>
            </span>
          </span>
          <span class="jobline" id="936664900JDES1"><p>Luke currently serves as a consultant software engineer, wearing many hats in multiple
          projects during his time at ThoughtWorks.  Below is a summary of his experience and
          accomplishments with his various clients.</p><p><strong>Major Insurance Company</strong>
</p><ul><li>Served as an application developer and front-end specialist on a greenfield
platform for one of the largest insurance companies in the U.S.<br></li><li>Designed component hierarchies in React and a state management architecture with Redux for two separate greenfield codebases</li><li>Composed comprehensive test suites, drove account-wide direction of testing strategy with Mocha, Chai, and Enzyme frameworks</li><li>Held learning sessions to teach React & Redux fundamentals to developers & QAs</li><li>Wrote source code, unit and contract tests in a Spring Boot microservice architecture<br></li></ul><p><strong>Leading Consulting Firm</strong>
</p><ul><li>Worked on software used to track employee information for a leading consulting
firm.</li><li>Extended codebase for a web application built with Java, SpringMVC, Javascript (ES5) and PostgreSQL, tested with Jasmine, Selenium, and JUnit.<br></li><li>Practiced continuous integration on a snapCI pipeline deploying to Heroku<br></li><li>Practiced non-
technical skills by facilitating discussions on team ceremonies, providing a developer
perspective on story analysis, and leading communication between the team and
external entities such as product owners, DevOps, and domain experts.<br></li><li>Spearheaded efforts to integrate Spring Security and Okta SSO into the application</li></ul><p><strong>Bicycle Vendor</strong>
</p><ul><li>Worked for six weeks in Pune, India on a team composed of engineers from around
the world.</li><li>Improved code quality and feature set of an online storefront inherited from a previous consultancy, developing a SpringMVC web
application tested with JUnit, Jasmine, and Selenium.</li><li>Devised schemes for pair programming and story developing,
 facilitated team communication & sprint planning, and served as a liaison between the dev team and Product Owner.</li><li>Took on roles as quality analyst and business analyst on a team comprised almost entirely of developers.</li><li>Served as the resident DevOps expert, tackling issues with
the teams GoCD pipeline as they arose and maintaining solid communication with the
DevOps team.</li></ul></span>
        </div>
      </div>
        <div id="PARAGRAPH_936664900_2_616296786" class="paragraph">
        <div class="singlecolumn">
          <span class="paddedline" style="display: inline;">
            <span class="jobtitle" id="936664900JTIT2">Intern Software Engineer</span><span></span>
            <span class="datesWrapper">
              <span class="jobdates" format="%b %Y" id="936664900JSTD2">Jun 2015</span><span> - </span>
              <span class="jobdates" format="%b %Y" id="936664900EDDT2">Jan 2016</span>
            </span>
          </span><br>
          <span class="paddedline">
            <span class="companyname" id="936664900COMP2">IBM</span><span></span>
            <span class="datesWrapper">
              <span class="joblocation jobcity" id="936664900JCIT2">Littleton</span><span>, </span>
              <span class="joblocation jobstate" id="936664900JSTA2">Massachusetts</span><br>
            </span>
          </span>
          <span class="jobline" id="936664900JDES2"><ul><li>Built a consumer-facing general purpose catalog for storing, organizing, and sharing files from scratch</li><li>Worked closely with Product Owner to establish a product vision and sensible tech stack, serving as the only developer on the team</li><li>Implemented catalog with Node.js, leveraging a Cloudant database and deploying on Bluemix</li><li>Supported SSO functionality with Google and Facebook</li><li>Extended UI functionality with AngularJS, enabling developers to create, test and deploy additions to IBM Connections Cloud applications</li><li>Expanded functionality of enterprise intranet software's RESTful API in Java<br></li></ul></span>
        </div>
      </div>
      </div>
      <div id="SECTION_CUST936670022" class="section">
        <div class="heading">
        <div id="SECTNAME_CUST936670022" class="sectiontitle">Side Projects</div>
      </div>
        <div id="PARAGRAPH_936670022_1_616300651" class="paragraph firstparagraph">
        <div class="field singlecolumn" id="936670022FRFM1"><p><strong>matchUS</strong></p><p><em>Creator, Winter 2017</em></p><p>Luke built a peer-to-peer platform enabling charitable donors and benefactors to match donations to charitable organizations. Luke built this platform with a React front-end leveraging APIs from Twitter, Zapier, and Dropbox. After open sourcing the project, Luke managed an ad-hoc team of 20 developers, analysts, and experience designers located in six different countries around the world. Through matchUS, users shared over $760,000 in matched donations.</p></div>
      </div>
      </div>
      <div id="SECTION_ACCM936673282" class="section"></div>
    </div>
  </body>
</html>
`
