import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render(){
      return(
        <div>
          <Grid>
            <Cell col={4}>
              <div style={{ textAlign: "center" }}>
                 <img src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                 alt="avatar" style={{height: '200px'}}/>
              </div>
              <h2 style={{ paddingTop: '2em' }}>Thomas Lorem</h2>
              <h4 style={{ color: 'gray' }}>Programmer</h4>
              <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}/>
              <h5>Address</h5>
              <p>1 Hacker Way Menlo Park, 94025</p>
              <h5>Phone</h5>
              <p>(123) 456-7898</p>
              <h5>Email</h5>
              <p>SomeOne@example.com</p>
              <h5>Web</h5>
              <p>mywebsite.com</p>
              <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}/>
            </Cell>
            <Cell className="resume-right-col" col={8}>
               <h2>Education</h2>
               <Education 
               startYear={ 2002 }
               endYear={ 2006 }
               schoolName="My University"
               schoolDescription="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."/>

              <Education 
               startYear={ 2007 }
               endYear={ 2009 }
               schoolName="My second University"
               schoolDescription="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."/>

               <hr style={{borderTop: '3px solid #e22947'}}/>

               <h2>Experience</h2>
               <Experience
                startYear={ 2009 }
                endYear={ 2012 }
                jobName="First Job"
                jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>

              <Experience
                startYear={ 2012 }
                endYear={ 2016 }
                jobName="First Job"
                jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>

              <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}/>
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}/>
              
              <Skills
                skill="HTML/CSS"
                progress={80}/>

              <Skills
                skill="NodeJS"
                progress={50}/>

              <Skills
                skill="React"
                progress={25}/>
              
              <Skills
                skill="React"
                progress={25}/>
            </Cell>
          </Grid>
        </div>
      )
    }
}

export default Resume;