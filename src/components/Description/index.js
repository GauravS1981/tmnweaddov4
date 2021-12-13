import React, { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";
import AutoplaySlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import About from '../About'
import Contact from '../Contact/contact'

import ReactDOM from 'react-dom'
import ScrollSnap from 'scroll-snap'


function callback() {
    console.log('snapped')
  }

    
class Body extends React.Component {
    // history = useHistory();
    container = React.createRef()

    bindScrollSnap() {
      const element = this.container.current
      const snapElement = new ScrollSnap(element, {
        snapDestinationY: '90%',
      })
  
      snapElement.bind(callback)
    }
  
    componentDidMount() {
      this.bindScrollSnap()
      Aos.init({ duration: 2000 });
    }
  

    render() {
    return (
< div  ref={this.container}>

<div class="container page first-page">
<About />
</div>
<div class="container page second-page">
            <Contact />
            </div>
<br/>
<br/>
<br/>

<div class="container page third-page">

  <div class="row">
  { <h2 className="ourvalue-mob">Our Values</h2> }
  <div class="overflow">
    <div class="col-sm-6"><div className = "text">
                    <h3>INTEGRITY</h3>
                    <p>
                    Why is this one the first? Well, lets just say that there
aint no joy in doing business without it. If we dont deliver
our promises to you, then you dont deliver your promises to
your client, then he gets upset with you and then you get upset with us.
You see where we are going with this...right?
                    </p>
                </div>
    </div>
    <div class="col-sm-6"><div className = "text">
                    <h3>PROMPTNESS</h3>
                    <p>
                    When you send an email at 3 am & a follow up to the same at 9 am,
you surely are in need of urgent assistance. We get that.
Thats why our turn around time to anything that you
equire with us is less than 4 hours.
Except when we are watching Game of Thrones! That show is addictive!
                    </p>
                </div>
    </div>
    <div class="col-sm-6"><div className = "text">
                    <h3>FLEXIBILITY</h3>
                    <p>
                    None of our team members can do a full split. And it's not like we didnt try!
But what we do do is listen to you patiently, understand what your client wants
& then devise a possible solution that actually works! And if that requires us to
twist some arms or break some...well...lets just say we get it done. Period.
                    </p>
                </div>
    </div>
    <div class="col-sm-6"><div className = "text">
                    <h3>SELECTIVENESS</h3>
                    <p>
                    Just like our Hotel partners, we also like to handpick our
Travel Partners. 'Cos we only work with a limited set of agents,
We answer their calls, give them both our ears to listen &
never lose our calm. Ofcourse, this goes out the window as soon
as we get back home to our respective spouses but isn't that
how GOD intended it?
                    </p>
                </div>
    </div>
    <div class="col-sm-6"><div className = "text">
                    <h3>MAXIMUM EFFORT!</h3>
                    <p>
                    You don't build credibility overnight. And that comes
with Positivty, Passion, Perseverance & a few other big words.
We always give our 100%, unless we give 80%. But whats 20% really?
                    </p>
                </div>
    </div>
    <div class="col-sm-6"><div className = "text">
                    <h3>OLD SCHOOLISH</h3>
                    <p>
                    Water water everywhere, not a drop to drink!
Info Info everywhere, but what to do with it?
Internet has so much of information that its impossible to
put it in context. But we are old school. We like to talk,
to listen, to discuss, to brainstrom, to ideate, to gather,
to share, to...wait...sorry...what were we talking about?
                    </p>
                </div>
    </div>
    <br/>
    <div class="col-sm-6"><div className = "text">
                    <h3>FUN</h3>
                    <p>
                    Fun is what we have from 9 am till 6 pm - when we work!
Other times its usally Beers & Conversations that keep our
spirits high! But can we tell you a secret? Sometimes the
two get mixed up! :P<br/>
Shhh......
                    </p>
                </div>
    </div>
    <div class="col-sm-6"><div className = "text">
                    <h3>AWESOMETASTIC</h3>
                    <p>
                    Now how cool is that word? Does it not deserve its own block!
Thats why it stays. Also, we coined this term. So, 'yey' to us &
'boo hoo' to those who still like to use Awesome & Fantastic in a sentence.
Move on guys!
                    </p>
                </div>
    </div>
    <h2 className="ourvalue">Our Values</h2>
    </div>
    
    {/* <div class="col-sm-4"><div className = "text">
                    <h3>INTEGRITY</h3>
                    <p>
                    Why is this one the first? Well, lets just say that there
                    aint no joy in doing business without it. If we dont deliver
                    our promises to you, then you dont deliver your promises to
                    your client, then he gets upset with you and then you get upset with us.
                    You see where we are going with this...right?
                    </p>
                </div>
    </div> */}
  </div>
</div>
<br/>
<br/>

<div className="container page four-page">
<h2 className="portfolio">Portfolio</h2>
<div className="mauto">
            <video autoplay loop controls width="640" height="480">
<source type="video/mp4" src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"/>
</video>
<h2 className="exloreauto" ><a href="/portfolio">EXLPORE</a></h2>
</div>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<div className="container page five-page">
<div className = "testimonials">
                <AutoplaySlider play={true} cancelOnInteraction={false} interval={6000} bullets={false} className = "test">
                    <div>
                        <h1>Hello</h1>
                        <p>Some random text</p>
                    </div>
                    <div>
                        <h1>Hello</h1>
                        <p>Some random text</p>
                    </div>
                    <div>
                        <h1>Hello</h1>
                        <p>Some random text</p>
                    </div>
                </AutoplaySlider>
            </div>
            <div className = "testimonials">
                <AutoplaySlider play={true} cancelOnInteraction={false} interval={6000} bullets={false} className = "test">
                    <div>
                        <h1>Hello</h1>
                        <p>Some random text</p>
                    </div>
                    <div>
                        <h1>Hello</h1>
                        <p>Some random text</p>
                    </div>
                    <div>
                        <h1>Hello</h1>
                        <p>Some random text</p>
                    </div>
                </AutoplaySlider>
            </div>
</div>
{/* 
        <div className = "description-grids">
            <section class="card" data-aos="fade-up">
                <div className = "text">
                    <h3>INTEGRITY</h3>
                    <p>
                    Why is this one the first? Well, lets just say that there
                    aint no joy in doing business without it. If we dont deliver
                    our promises to you, then you dont deliver your promises to
                    your client, then he gets upset with you and then you get upset with us.
                    You see where we are going with this...right?
                    </p>
                </div>
            </section>
            <section class="card" data-aos="fade-up">
                <div></div>
                <div className = "text">
                    <h3>PROMPTNESS</h3>
                    <p>
                    When you send an email at 3 am & a follow up to the same at 9 am,
                    you surely are in need of urgent assistance. We get that.
                    Thats why our turn around time to anything that you
                    equire with us is less than 4 hours.
                    Except when we are watching Game of Thrones! That show is addictive!
                    </p>
                </div>
            </section>
            <section class="card" data-aos="fade-up">
                <div className = "text">
                    <h3>FLEXIBILITY</h3>
                    <p>
                    None of our team members can do a full split. And it's not like we didnt try!
                    But what we do do is listen to you patiently, understand what your client wants
                    & then devise a possible solution that actually works! And if that requires us to
                    twist some arms or break some...well...lets just say we get it done. Period.
                    </p>
                </div>
            </section>
            <section class="card" data-aos="fade-up">
                <div></div>
                <div className = "text">
                    <h3>SELECTIVENESS</h3>
                    <p>
                    Just like our Hotel partners, we also like to handpick our
                    Travel Partners. 'Cos we only work with a limited set of agents,
                    We answer their calls, give them both our ears to listen &
                    never lose our calm. Ofcourse, this goes out the window as soon
                    as we get back home to our respective spouses but isn't that
                    how GOD intended it?
                    </p>
                </div>
            </section>
            <section class="card" data-aos="fade-up">
                <div className = "text">
                    <h3>MAXIMUM EFFORT!</h3>
                    <p>
                    You don't build credibility overnight. And that comes
                    with Positivty, Passion, Perseverance & a few other big words.
                    We always give our 100%, unless we give 80%. But whats 20% really?
                    </p>
                </div>
            </section>
            <section class="card" data-aos="fade-up">
                <div></div>
                <div className = "text">
                    <h3>OLD SCHOOLISH</h3>
                    <p>
                    Water water everywhere, not a drop to drink!
                    Info Info everywhere, but what to do with it?
                    Internet has so much of information that its impossible to
                    put it in context. But we are old school. We like to talk,
                    to listen, to discuss, to brainstrom, to ideate, to gather,
                    to share, to...wait...sorry...what were we talking about?
                    </p>
                </div>
            </section>
            <section class="card" data-aos="fade-up">
                <div className = "text">
                    <h3>FUN</h3>
                    <p>
                    Fun is what we have from 9 am till 6 pm - when we work!
                    Other times its usally Beers & Conversations that keep our
                    spirits high! But can we tell you a secret? Sometimes the
                    two get mixed up! :P
                    Shhh......
                    </p>
                </div>
            </section>
            <section class="card last" data-aos="fade-up">
                <div></div>
                <div className = "text">
                    <h3>AWESOMETASTIC</h3>
                    <p>
                    Now how cool is that word? Does it not deserve its own block!
                    Thats why it stays. Also, we coined this term. So, 'yey' to us &
                    'boo hoo' to those who still like to use Awesome & Fantastic in a sentence.
                    Move on guys!
                    </p>
                </div>
            </section>
        </div> */}
        </div>
    );
    }
}

export default Body;
