export const LINE = [
    {
        id: "6bnzdi6n4z6",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 8px;
  height: 40px;
  border-radius: 4px;
  display: inline-block;
  margin-left: 20px;
  margin-top: 10px;
  position: relative;
  background: currentColor;
  color: #FFF;
  box-sizing: border-box;
  animation: animloader 0.3s 0.3s linear infinite alternate;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 8px;
  height: 40px;
  border-radius: 4px;
  background: currentColor;
  position: absolute;
  bottom: 0;
  left: 20px;
  animation: animloader1 0.3s  0.45s  linear infinite alternate;
}
.loader::before {
  left: -20px;
  animation-delay: 0s;
}

@keyframes animloader {
  0% {
    height: 40px;
    transform: translateY(0);
  }
  100% {
    height: 10px;
    transform: translateY(30px);
  }
}

@keyframes animloader1 {
  0% {
    height: 48px;
  }
  100% {
    height: 4.8px;
  }
}
    `,
    }, {
        id: "3n68si8hgcw",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 8px;
  height: 40px;
  border-radius: 4px;
  display: block;
  margin: 20px auto;
  position: relative;
  background: currentColor;
  color: #FFF;
  box-sizing: border-box;
  animation: animloader 0.3s 0.3s linear infinite alternate;
}

.loader::after, .loader::before {
  content: '';
  width: 8px;
  height: 40px;
  border-radius: 4px;
  background: currentColor;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
  box-sizing: border-box;
  animation: animloader 0.3s  0.45s  linear infinite alternate;
}
.loader::before {
  left: -20px;
  animation-delay: 0s;
}

@keyframes animloader {
  0%   { height: 48px} 
  100% { height: 4px}
}
`,
    }, {
        id: "f9tbqzhdk0u",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 8px;
  height: 48px;
  display: block;
  margin: auto;
  left: -20px;
  position: relative;
  border-radius: 4px;
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;
}

@keyframes animloader {
  0% {
    box-shadow: 20px 0 rgba(255, 255, 255, 0.25), 40px 0 white, 60px 0 white;
  }
  50% {
    box-shadow: 20px 0 white, 40px 0 rgba(255, 255, 255, 0.25), 60px 0 white;
  }
  100% {
    box-shadow: 20px 0 white, 40px 0 white, 60px 0 rgba(255, 255, 255, 0.25);
  }
}
    `,
    },
    
    {
        id: "dkndou5oj6o",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 8px;
  height: 48px;
  display: inline-block;
  position: relative;
  border-radius: 4px;
  color: #FFF;
  box-sizing: border-box;
  animation: animloader 0.6s linear infinite;
}

@keyframes animloader {
  0% {
    box-shadow: 20px -10px, 40px 10px, 60px 0px;
  }
  25% {
    box-shadow: 20px 0px, 40px  0px, 60px 10px;
  }
  50% {
    box-shadow: 20px 10px, 40px -10px, 60px 0px;
  }
  75% {
    box-shadow: 20px 0px, 40px 0px, 60px -10px;
  }
  100% {
    box-shadow: 20px -10px, 40px 10px, 60px 0px;
  }
}
    `,
    },

    {
        id: "nd6o-mtrix",
        html: `<span class="loader"></span>`,
        css: `.loader {
          width:45px;
          height:40px;
          background:
            linear-gradient(#0000 calc(1*100%/6),#fff 0 calc(3*100%/6),#0000 0),
            linear-gradient(#0000 calc(2*100%/6),#fff 0 calc(4*100%/6),#0000 0),
            linear-gradient(#0000 calc(3*100%/6),#fff 0 calc(5*100%/6),#0000 0);
          background-size:10px 400%;
          background-repeat: no-repeat;
          animation:matrix 1s infinite linear;
          }
          @keyframes matrix {
            0% {background-position: 0% 100%, 50% 100%, 100% 100% }
            100% {background-position: 0% 0%, 50% 0%, 100% 0% }
          }
    `,
    },
    
    
    {
        id: "xr1ogquld0d",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 6px;
  display: block;
  margin: auto;
  position: relative;
  border-radius: 4px;
  color: #FFF;
  box-sizing: border-box;
  animation: animloader 0.6s linear infinite;
}

@keyframes animloader {
  0% { box-shadow: -10px 20px, 10px 35px , 0px 50px }
  25% { box-shadow: 0px 20px ,  0px 35px, 10px 50px }
  50% { box-shadow: 10px 20px, -10px 35px, 0px 50px }
  75% { box-shadow: 0px 20px, 0px  35px, -10px 50px }
  100% { box-shadow: -10px 20px, 10px  35px, 0px 50px}
}
`,
    }, {
        id: "ll3kbbwjsy",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 4.8px;
  height: 4.8px;
  display: inline-block;
  margin-top: 20px;
  position: relative;
  border-radius: 4px;
  color: #FFF;
  background: currentColor;
  box-sizing: border-box;
  animation: animloader 0.3s 0.3s linear infinite alternate;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 4.8px;
  height: 4.8px;
  border-radius: 4px;
  background: currentColor;
  position: absolute;
  left: 0;
  top: 15px;
  animation: animloader 0.3s 0.45s linear infinite alternate;
}
.loader::after {
  top: -15px;
  animation-delay: 0s;
}

@keyframes animloader {
  0% {
    width: 4.8px;
  }
  100% {
    width: 48px;
  }
}`,
    }, {
        id: "dvitkpqg7fa",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 4.8px;
  height: 4.8px;
  display: block;
  margin: 20px auto;
  position: relative;
  border-radius: 4px;
  color: #FFF;
  background: currentColor;
  box-sizing: border-box;
  animation: animloader 0.3s 0.3s linear infinite alternate;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 4.8px;
  height: 4.8px;
  border-radius: 4px;
  background: currentColor;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 15px;
  animation: animloader 0.3s 0.45s linear infinite alternate;
}
.loader::after {
    top: -15px;
    animation-delay: 0s;
}

@keyframes animloader {
    0% { width: 4.8px }
    100% { width: 48px}
}
`,
}, 
  {
    id: "linSpiLox",
    html: `<span class="loader"></span>`,
    css: `.loader {
  color: #FFF;
  position: relative;
  font-size: 11px;
  background: #FFF;
  animation: escaleY 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
  left: 2em;
  background: #FFF;
  width: 1em;
  height: 4em;
  animation: escaleY 1s infinite ease-in-out;
}
.loader:before {
  left: -2em;
  animation-delay: -0.32s;
}

@keyframes escaleY {
  0%, 80%, 100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
`,
}, 
    
{
  id: "zdy2kji5lvp",
  html: `<span class="loader"></span>`,
  css: `.loader {
  width: 8px;
  height: 48px;
  display: inline-block;
  position: relative;
  border-radius: 4px;
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;
}

@keyframes animloader {
  0% {
    box-shadow: 20px 0 rgba(255, 255, 255, 0), 40px 0 rgba(255, 255, 255, 0), 60px 0 rgba(255, 255, 255, 0), 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0);
  }
  20% {
    box-shadow: 20px 0 white, 40px 0 rgba(255, 255, 255, 0), 60px 0 rgba(255, 255, 255, 0), 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0);
  }
  40% {
    box-shadow: 20px 0 white, 40px 0 white, 60px 0 rgba(255, 255, 255, 0), 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0);
  }
  60% {
    box-shadow: 20px 0 white, 40px 0 white, 60px 0 white, 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0);
  }
  80% {
    box-shadow: 20px 0 white, 40px 0 white, 60px 0 white, 80px 0 white, 100px 0 rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 20px 0 white, 40px 0 white, 60px 0 white, 80px 0 white, 100px 0 white;
  }
}
    `,
    },
  {
    id: "spnPlixShrk34glsf",
    html: `<span class="loader"></span>`,
    css: `.loader {
        height: 30px;
        width: 10px;
        border-radius: 4px;
        color: #fff;
        background: currentColor;
        position: relative;
        animation: ht 1s ease-in infinite alternate;
        box-shadow: 15px 0 0 -1px , -15px 0 0 -1px ,
                    30px 0 0 -2px , -30px 0 0 -2px,
                    45px 0 0 -3px , -45px 0 0 -3px;
      }

      @keyframes ht {
        100% { height: 0px }
      }
    `,
    },
    
  {
    id: "lnBallStpUp",
    html: `<span class="loader"></span>`,
    css: `.loader {
    position: relative;
    width: 75px;
    height: 100px;
    background-repeat: no-repeat;
    background-image: linear-gradient(#DDD 50px, transparent 0),
                      linear-gradient(#DDD 50px, transparent 0),
                      linear-gradient(#DDD 50px, transparent 0),
                      linear-gradient(#DDD 50px, transparent 0),
                      linear-gradient(#DDD 50px, transparent 0);
    background-size: 8px 100%;
    background-position: 0px 90px, 15px 78px, 30px 66px, 45px 58px, 60px 50px;
    animation: pillerPushUp 4s linear infinite;
  }
  .loader:after {
    content: '';
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 10px;
    height: 10px;
    background: #de3500;
    border-radius: 50%;
    animation: ballStepUp 4s linear infinite;
  }

@keyframes pillerPushUp {
  0% , 40% , 100%{background-position: 0px 90px, 15px 78px, 30px 66px, 45px 58px, 60px 50px}
  50% ,  90% {background-position: 0px 50px, 15px 58px, 30px 66px, 45px 78px, 60px 90px}
}

@keyframes ballStepUp {
  0% {transform: translate(0, 0)}
  5% {transform: translate(8px, -14px)}
  10% {transform: translate(15px, -10px)}
  17% {transform: translate(23px, -24px)}
  20% {transform: translate(30px, -20px)}
  27% {transform: translate(38px, -34px)}
  30% {transform: translate(45px, -30px)}
  37% {transform: translate(53px, -44px)}
  40% {transform: translate(60px, -40px)}
  50% {transform: translate(60px, 0)}
  57% {transform: translate(53px, -14px)}
  60% {transform: translate(45px, -10px)}
  67% {transform: translate(37px, -24px)}
  70% {transform: translate(30px, -20px)}
  77% {transform: translate(22px, -34px)}
  80% {transform: translate(15px, -30px)}
  87% {transform: translate(7px, -44px)}
  90% {transform: translate(0, -40px)}
  100% {transform: translate(0, 0);}
}
    `,
    },
  {
    id: "sndWveBr",
    html: `<span class="loader"></span>`,
    css: `.loader {
    position: relative;
    width: 85px;
    height: 50px;
    background-repeat: no-repeat;
    background-image: linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0);
    background-position: 0px center, 15px center, 30px center, 45px center, 60px center, 75px center, 90px center;
    animation: rikSpikeRoll 0.65s linear infinite alternate;
  }
@keyframes rikSpikeRoll {
  0% { background-size: 10px 3px;}
  16% { background-size: 10px 50px, 10px 3px, 10px 3px, 10px 3px, 10px 3px, 10px 3px}
  33% { background-size: 10px 30px, 10px 50px, 10px 3px, 10px 3px, 10px 3px, 10px 3px}
  50% { background-size: 10px 10px, 10px 30px, 10px 50px, 10px 3px, 10px 3px, 10px 3px}
  66% { background-size: 10px 3px, 10px 10px, 10px 30px, 10px 50px, 10px 3px, 10px 3px}
  83% { background-size: 10px 3px, 10px 3px,  10px 10px, 10px 30px, 10px 50px, 10px 3px}
  100% { background-size: 10px 3px, 10px 3px, 10px 3px,  10px 10px, 10px 30px, 10px 50px}
}
    `,
    },
  {
    id: "brPpUp",
    html: `<span class="loader"></span>`,
    css: `.loader {
    position: relative;
    width: 55px;
    height: 55px;
    background-repeat: no-repeat;
    background-image: linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0);
    background-size: 5px 40px;
    background-position: 0px center, 10px center, 20px center, 30px center, 40px center, 50px center;
    animation: spikeUp 1s linear infinite alternate;
  }
@keyframes spikeUp {
  0% { background-size: 5px 40px}
  16% { background-size: 5px 55px, 5px 40px, 5px 40px, 5px 40px, 5px 40px, 5px 40px}
  33% { background-size: 5px 40px, 5px 55px, 5px 40px, 5px 40px, 5px 40px, 5px 40px}
  50% { background-size: 5px 40px, 5px 40px, 5px 55px, 5px 40px, 5px 40px, 5px 40px}
  66% { background-size: 5px 40px, 5px 40px, 5px 40px, 5px 55px, 5px 40px, 5px 40px}
  83% { background-size: 5px 40px, 5px 40px, 5px 40px, 5px 40px, 5px 55px, 5px 40px}
  100% { background-size: 5px 40px, 5px 40px, 5px 40px, 5px 40px, 5px 40px, 5px 55px}
}
      `,
    },
    
    
    
    {
        id: "ewhrfgl50sf",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 20px;
  height: 12px;
  display: block;
  margin: auto;
  position: relative;
  border-radius: 4px;
  color: #FFF;
  background: currentColor;
  box-sizing: border-box;
  animation: animloader 0.6s 0.3s ease infinite alternate;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 20px;
  height: 12px;
  background: currentColor;
  position: absolute;
  border-radius: 4px;
  top: 0;
  right: 110%;
  animation: animloader  0.6s ease infinite alternate;
}
.loader::after {
  left: 110%;
  right: auto;
  animation-delay: 0.6s;
}

@keyframes animloader {
  0% {
    width: 20px;
  }
  100% {
    width: 48px;
  }
}`,
    },
    {
        id: "dfghdtrhjudfgdf",
        html: `<div class="loader"></div>`,
        css: `
        .loader {
          width: 50px;
          height: 50px;
          display: grid;
      }
      .loader::before,
      .loader::after {    
          content:"";
          grid-area: 1/1;
          --c: radial-gradient(farthest-side,#766DF4 92%,#0000);
          background: 
            var(--c) 50%  0, 
            var(--c) 50%  100%, 
            var(--c) 100% 50%, 
            var(--c) 0    50%;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          animation: s2 1s infinite;
      }
      .loader::before {
        margin:4px;
        filter:hue-rotate(45deg);
        background-size: 8px 8px;
        animation-timing-function: linear
      }
      
      @keyframes s2{ 
        100%{transform: rotate(.5turn)}
      }`,
    },
    {
        id: "gfb-sdfgkfnkd",
        html: `<div class="loader"></div>`,
        css: `.loader {
          width:50px;
          height:50px;
          border-radius:50%;
          color:#766DF4;
          background: 
            linear-gradient(currentColor 0 0) center/100% 4px,
            linear-gradient(currentColor 0 0) center/4px 100%,
            radial-gradient(farthest-side,#0000 calc(100% - 6px),currentColor calc(100% - 5px)),
            radial-gradient(circle 6px,currentColor 94%,#0000 0);
          background-repeat: no-repeat;
          animation:s10 2s infinite linear;
          position: relative;
        }
        .loader:before {
          content: "";
          position: absolute;
          inset:0;
          border-radius: inherit;
          background:inherit;
          transform:rotate(45deg);
        }
        @keyframes s10 {to{transform: rotate(.5turn)}}`,
    },
    {
        id: "gfb-sdfwedx",
        html: `<span class="loader">loader</span>`,
        content: 'Loading',
        css: `.loader {
        display:flex;
        justify-content: center;
        align-items: center;
        height:100%;
        margin: auto;
        font-family: Helvetica, sans-serif, Arial;
        animation: load 1.2s infinite 0s ease-in-out;
        animation-direction: alternate;
        text-shadow: 0 0 1px white;
        }
      @keyframes load {
        0%{
            opacity: 0.08;
            filter: blur(5px);
            letter-spacing: 3px;
            }
       }
    
     `,
    },
    {
        id: "gfb-wsedrftg",
        html: `<div class="loader"></div>`,
        content: ` <span></span>
        <span></span>
        <span></span>`,
        css: `
      .loader {
          width: 16em;
          height: 8em;
          position: relative;
          overflow: hidden;
      }
      
      .loader::before,
      .loader::after {
          content: '';
          position: absolute;
          bottom: 0;
      }
      
      .loader::before {
          width: inherit;
          height: 0.2em;
          background-color: hsla(0, 0%, 85%);
      }
      
      .loader::after {
          box-sizing: border-box;
          width: 50%;
          height: inherit;
          border: 0.2em solid hsla(0, 0%, 85%);
          border-radius: 50%;
          left: 25%;
      }
      
      .loader span {
          position: absolute;
          width: 5%;
          height: 10%;
          background-color: white;
          border-radius: 50%;
          bottom: 0.2em;
          left: -5%;
          animation: 2s linear infinite;
          transform-origin: 50% -3em;
          animation-name: run, rotating;
      }
      
      .loader span:nth-child(2) {animation-delay: 0.075s;}
      .loader span:nth-child(3) {animation-delay: 0.15s;}
      
      @keyframes run {
          0% {left: -5%;}
          10%, 60% {left: calc((100% - 5%) / 2);}
          70%, 100% {left: 100%;}
      }
      
      @keyframes rotating {
          0%, 10% {transform: rotate(0deg);}
          60%, 100% {transform: rotate(-1turn);}
      }
      
     `,
    },
    {
        id: "gfb-wdsasedrftg",
        html: `<div class="loader">
        <div class="top-left"></div>
        <div class="top-right"></div>
        <div class="bottom-left"></div>
        <div class="bottom-right"></div>
      </div>`,
        content: ` <div class="top-left"></div>
        <div class="top-right"></div>
        <div class="bottom-left"></div>
        <div class="bottom-right"></div>`,
        css: `
        div{display:block;position:absolute}

        .loader{
          width:200px;
          height:200px;
          top:50%;
          left:50%;
          transform:translate(0%,0%)
          }
        
        .loader div{
          width:100px;
          height:100px;
          top:50px;
          left:50px
          }
        
        .top-left{animation:tl 7.5s ease infinite}
        .top-right{animation:tr 7.5s ease infinite}
        .bottom-left{animation:bl 7.5s ease infinite}
        .bottom-right{animation:br 7.5s ease infinite}
        
        .loader div:before,
        .loader div:after
          {display:block;position:absolute;content:""}
        
        .loader div:before{width:50px;height:50px}
        
        .top-left:before{
          background:#fbbc05;
          top:0;
          left:0;
          border-radius:100% 0 0 0
          }
        
        .top-right:before{
          background:#ea4335;
          top:0;
          right:0;
          border-radius:0 100% 0 0
          }
        
        .bottom-left:before{
          background:#34a853;
          bottom:0;
          left:0;
          border-radius:0 0 0 100%
          }
        
        .bottom-right:before{
          background:#4285f4;
          bottom:0;
          right:0;
          border-radius:0 0 100% 0
          }
        
        .loader div:after{
          background:#000;
          width:25px;
          height:25px;
          z-index:1
          }
        
        .top-left:after
          {top:25px;left:25px;border-radius:100% 0 0 0}
        
        .top-right:after
          {top:25px;right:25px;border-radius:0 100% 0 0}
        
        .bottom-left:after
          {bottom:25px;left:25px;border-radius:0 0 0 100%}
        
        .bottom-right:after
          {bottom:25px;right:25px;border-radius:0 0 100% 0}
        
        @keyframes tl{
          0%,96%,100%{transform:rotate(0deg)}
          12%{transform:rotate(-45deg)}
          24%{transform:rotate(-90deg)}
          36%{transform:rotate(-135deg)}
          48%{left:50px;transform:rotate(-180deg)}
          60%{left:125px;opacity:1;transform:rotate(-135deg)}
          61%,95%{opacity:0}
          }
        
        @keyframes tr{
          0%{transform:rotate(0deg)}
          12%{transform:rotate(-45deg)}
          24%{transform:rotate(-90deg)}
          36%{transform:rotate(-135deg)}
          48%{transform:rotate(-180deg)}
          60%{transform:rotate(-225deg)}
          72%{transform:rotate(-270deg)}
          84%{transform:rotate(-315deg)}
          96%,100%{transform:rotate(-360deg)}
          }
        
        @keyframes bl{
          0%,100%{transform:rotate(0deg)}
          12%{transform:rotate(-45deg)}
          24%{left:50px;transform:rotate(-90deg)}
          36%{left:125px;opacity:1;transform:rotate(-45deg)}
          37%,83%{opacity:0}
          84%{left:-25px;opacity:1;transform:rotate(-45deg)}
          96%{left:50px;transform:rotate(0deg)}
          }
        
        @keyframes br{
          0%,96%,100%{transform:rotate(0deg)}
          12%{left:125px;opacity:1;transform:rotate(45deg)}
          13%,59%{opacity:0}
          60%{left:-25px;opacity:1;transform:rotate(45deg)}
          72%{left:50px;transform:rotate(90deg)}
          84%{transform:rotate(45deg)}
          }
    `,
    },
    {
        id: "gfb-wsazxc",
        html: `<div class="loader"></div>`,
        content: ` `,
        css: `,html {
          background: #000000;
          padding-top: 50px;
        }
        
        .loader {
          position: relative;
          margin: auto;
          box-sizing: border-box;
          background-clip: padding-box;
          width: 200px;
          height: 200px;
          border-radius: 100px;
          border: 4px solid rgba(255, 255, 255, 0.1);
          -webkit-mask: linear-gradient(rgba(0, 0, 0, 0.1), #000000 90%);
          transform-origin: 50% 60%;
          transform: perspective(200px) rotateX(66deg);
          animation: loader-wiggle 1.2s infinite;
        }
        .loader:before,
        .loader:after {
          content: "";
          position: absolute;
          margin: -4px;
          box-sizing: inherit;
          width: inherit;
          height: inherit;
          border-radius: inherit;
          opacity: .05;
          border: inherit;
          border-color: transparent;
          animation: loader-spin 1.2s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, loader-fade 1.2s linear infinite;
        }
        
        .loader:before {
          border-top-color: #66e6ff;
        }
        
        .loader:after {
          border-top-color: #f0db75;
          animation-delay: 0.3s;
        }
        
        @keyframes loader-spin {
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes loader-fade {
          20% {
            opacity: .1;
          }
          40% {
            opacity: 1;
          }
          60% {
            opacity: .1;
          }
        }`,
    },
    {
        id: "gfb-wsacfsdfzxc",
        html: ` <div class="loader">
        <div class="box1"></div>
        <div class="box2"></div>
        <div class="box3"></div>
    </div>`,
        content: `<div class="box1"></div>
        <div class="box2"></div>
        <div class="box3"></div>`,
        css: `
         .loader {
          width: 112px;
          height: 112px;
        }
         .loader .box1,
         .loader .box2,
         .loader .box3 {
          border: 16px solid #f5f5f5;
          box-sizing: border-box;
          position: absolute;
          display: block;
        }
         .loader .box1 {
          width: 112px;
          height: 48px;
          margin-top: 64px;
          margin-left: 0px;
          animation: anime1 4s 0s forwards ease-in-out infinite;
        }
         .loader .box2 {
          width: 48px;
          height: 48px;
          margin-top: 0px;
          margin-left: 0px;
          animation: anime2 4s 0s forwards ease-in-out infinite;
        }
         .loader .box3 {
          width: 48px;
          height: 48px;
          margin-top: 0px;
          margin-left: 64px;
          animation: anime3 4s 0s forwards ease-in-out infinite;
        }
        @-moz-keyframes anime1 {
          0% {
            width: 112px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
          12.5% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
          25% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
          37.5% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
          50% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
          62.5% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
          75% {
            width: 48px;
            height: 112px;
            margin-top: 0px;
            margin-left: 0px;
          }
          87.5% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
          100% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
        }
        @-webkit-keyframes anime1 {
          0% {
            width: 112px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
          12.5% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
          25% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
          37.5% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
          50% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
          62.5% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
          75% {
            width: 48px;
            height: 112px;
            margin-top: 0px;
            margin-left: 0px;
          }
          87.5% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
          100% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
        }
        @-o-keyframes anime1 {
          0% {
            width: 112px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
          12.5% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
          25% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
          37.5% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
          50% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
          62.5% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
          75% {
            width: 48px;
            height: 112px;
            margin-top: 0px;
            margin-left: 0px;
          }
          87.5% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
          100% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
        }
        @keyframes anime1 {
          0% {
            width: 112px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
          12.5% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
          25% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
          37.5% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
          50% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
          62.5% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
          75% {
            width: 48px;
            height: 112px;
            margin-top: 0px;
            margin-left: 0px;
          }
          87.5% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
          100% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
        }
        @-moz-keyframes anime2 {
          0% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
          12.5% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
          25% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
          37.5% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
          50% {
            width: 112px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
          62.5% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
          }
          75% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
          }
          87.5% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
          }
          100% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
          }
        }
        @-webkit-keyframes anime2 {
          0% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
          12.5% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
          25% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
          37.5% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
          50% {
            width: 112px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
          62.5% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
          }
          75% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
          }
          87.5% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
          }
          100% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
          }
        }
        @-o-keyframes anime2 {
          0% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
          12.5% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
          25% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
          37.5% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
          50% {
            width: 112px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
          62.5% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
          }
          75% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
          }
          87.5% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
          }
          100% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
          }
        }
        @keyframes anime2 {
          0% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
          12.5% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
          25% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
          37.5% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
          50% {
            width: 112px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
          }
          62.5% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
          }
          75% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
          }
          87.5% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
          }
          100% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
          }
        }
        @-moz-keyframes anime3 {
          0% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
          }
          12.5% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
          }
          25% {
            width: 48px;
            height: 112px;
            margin-top: 0px;
            margin-left: 64px;
          }
          37.5% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 64px;
          }
          50% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 64px;
          }
          62.5% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 64px;
          }
          75% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 64px;
          }
          87.5% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 64px;
          }
          100% {
            width: 112px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
        }
        @-webkit-keyframes anime3 {
          0% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
          }
          12.5% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
          }
          25% {
            width: 48px;
            height: 112px;
            margin-top: 0px;
            margin-left: 64px;
          }
          37.5% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 64px;
          }
          50% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 64px;
          }
          62.5% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 64px;
          }
          75% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 64px;
          }
          87.5% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 64px;
          }
          100% {
            width: 112px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
        }
        @-o-keyframes anime3 {
          0% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
          }
          12.5% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
          }
          25% {
            width: 48px;
            height: 112px;
            margin-top: 0px;
            margin-left: 64px;
          }
          37.5% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 64px;
          }
          50% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 64px;
          }
          62.5% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 64px;
          }
          75% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 64px;
          }
          87.5% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 64px;
          }
          100% {
            width: 112px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
        }
        @keyframes anime3 {
          0% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
          }
          12.5% {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
          }
          25% {
            width: 48px;
            height: 112px;
            margin-top: 0px;
            margin-left: 64px;
          }
          37.5% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 64px;
          }
          50% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 64px;
          }
          62.5% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 64px;
          }
          75% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 64px;
          }
          87.5% {
            width: 48px;
            height: 48px;
            margin-top: 64px;
            margin-left: 64px;
          }
          100% {
            width: 112px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
          }
        }
        `,
    },{
      id:"sdfa",
      html:`<div class="loader"></div>`,
  content:``,
      css:`/* Follow me for more pens like this! */

      /* Center the loader */
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #222229;
      }
      
      .loader {
        display: block;
        width: 125px;
        height: 125px;
        position: relative;
        transform-style: preserve-3d;
        border-radius: 50%;
        background: #fcc96b;
        background: rgb(252, 201, 107);
        background: linear-gradient(
          180deg,
          rgba(252, 201, 107, 1) 0%,
          rgba(252, 201, 107, 1) 15%,
          rgba(247, 174, 1, 1) 15%,
          rgba(247, 174, 1, 1) 19%,
          rgba(252, 201, 107, 1) 19%,
          rgba(252, 201, 107, 1) 22%,
          rgba(247, 174, 1, 1) 22%,
          rgba(247, 174, 1, 1) 28%,
          rgba(252, 201, 107, 1) 28%,
          rgba(252, 201, 107, 1) 31%,
          rgba(252, 201, 107, 1) 33%,
          rgba(252, 201, 107, 1) 36%,
          rgba(247, 174, 1, 1) 36%,
          rgba(247, 174, 1, 1) 48%,
          rgba(252, 201, 107, 1) 48%,
          rgba(252, 201, 107, 1) 55%,
          rgba(247, 174, 1, 1) 55%,
          rgba(247, 174, 1, 1) 66%,
          rgba(252, 201, 107, 1) 66%,
          rgba(252, 201, 107, 1) 70%,
          rgba(247, 174, 1, 1) 70%,
          rgba(247, 174, 1, 1) 73%,
          rgba(252, 201, 107, 1) 73%,
          rgba(252, 201, 107, 1) 82%,
          rgba(247, 174, 1, 1) 82%,
          rgba(247, 174, 1, 1) 86%,
          rgba(252, 201, 107, 1) 86%
        );
        box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.25),
          inset 8px -4px 6px rgba(199, 128, 0, 0.5),
          inset -8px 4px 8px rgba(255, 235, 199, 0.5),
          inset 20px -5px 12px #f7ae01,
          0 0 100px rgba(255, 255, 255, 0.35);
        transform: rotateZ(-15deg);
      }
      
      .loader::before {
        position: absolute;
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 16px solid #7b6f42;
        border-top-width: 0;
        border-radius: 50%;
        box-shadow: 0 -2px 0 #b1a693;
        animation: rings1 0.8s infinite linear;
      }
      
      .loader::after {
        position: absolute;
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 8px solid #b1a693;
        border-top-width: 0;
        border-radius: 50%;
        box-shadow: 0 -2px 0 #7b6f42;
        animation: rings2 0.8s infinite linear;
      }
      
      @keyframes rings1 {
        0% {
          transform: rotateX(65deg) rotateZ(0deg) scale(1.75);
        }
        100% {
          transform: rotateX(65deg) rotateZ(360deg) scale(1.75);
        }
      }
      
      @keyframes rings2 {
        0% {
          transform: rotateX(65deg) rotateZ(0deg) scale(1.7);
        }
        100% {
          transform: rotateX(65deg) rotateZ(360deg) scale(1.7);
        }
      }
      `,
    },{
      id:"sdsdfafa",
      html:`
      <div class="loader">
         <div class="planet">
            <div class="ring"></div>
               <div class="cover-ring"></div>
            <div class="spots">
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
      
            </div>
         </div>
         <p>loading</p>
      </div>`,
  content:`<div class="planet">
  <div class="ring"></div>
     <div class="cover-ring"></div>
  <div class="spots">
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span></span>

  </div>
</div>
<p>loading</p>  `,
      css:`
      @import url("https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap");
body {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #3c4359;
}
.loader {
  width: 300px;
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader .planet {
  width: 65%;
  height: 65%;
  background-color: #546c8c;
  border-radius: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  transform-origin: center center;
  box-shadow: inset 2px -10px 0px rgba(0, 0, 0, 0.1);
  animation: planet 5s ease infinite alternate;
}
@keyframes planet {
  /* planet ring */
  0% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(-10deg);
  }
}
.loader .planet .ring {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 100%;
  background-color: #bacbd9;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 33% center;
  box-shadow: 2px -10px 0px rgba(0, 0, 0, 0.1), inset -5px -10px 0px rgba(0, 0, 0, 0.1);
  animation: ring 3s ease infinite;
}
@keyframes ring {
  /* small ball */
  0% {
    transform: rotateX(110deg) rotateZ(0deg) translate(-50px, 5px);
  }
  100% {
    transform: rotateX(110deg) rotateZ(360deg) translate(-50px, 5px);
  }
}
.loader .planet .ring:before {
  content: "";
  position: absolute;
  width: 10px;
  height: 30px;
  border-radius: 100%;
  background-color: #7ea1bf;
  z-index: 2;
  left: calc(0px - 5px);
  box-shadow: inset -3px 3px 0px rgba(0, 0, 0, 0.2);
  /* inner ring */
}
.loader .planet .ring:after {
  content: "";
  position: absolute;
  width: 240px;
  height: 240px;
  border-radius: 100%;
  background-color: #7ea1bf;
  box-shadow: inset 2px -10px 0px rgba(0, 0, 0, 0.1);
  /* to cover the back of the ring */
}
.loader .planet .cover-ring {
  position: absolute;
  width: 100%;
  height: 50%;
  border-bottom-left-radius: 80%;
  border-bottom-right-radius: 80%;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  transform: translate(0px, -17px);
  background-color: #546c8c;
  z-index: 2;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);
  /* planet spots */
}
.loader .planet .spots {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
}
.loader .planet .spots span {
  width: 30px;
  height: 30px;
  background-color: #3c4359;
  position: absolute;
  border-radius: 100%;
  box-shadow: inset -2px 3px 0px rgba(0, 0, 0, 0.3);
  animation: dots 5s ease infinite alternate;
}
@keyframes dots {
  0% {
    box-shadow: inset -3px 3px 0px rgba(0, 0, 0, 0.3);
  }
  100% {
    box-shadow: inset 3px 3px 0px rgba(0, 0, 0, 0.3);
  }
}
.loader .planet .spots span:nth-child(1) {
  top: 20px;
  right: 50px;
}
.loader .planet .spots span:nth-child(2) {
  top: 40px;
  left: 50px;
  width: 15px;
  height: 15px;
}
.loader .planet .spots span:nth-child(3) {
  top: 80px;
  left: 20px;
  width: 25px;
  height: 25px;
}
.loader .planet .spots span:nth-child(4) {
  top: 80px;
  left: 90px;
  width: 40px;
  height: 40px;
}
.loader .planet .spots span:nth-child(5) {
  top: 160px;
  left: 70px;
  width: 15px;
  height: 15px;
}
.loader .planet .spots span:nth-child(6) {
  top: 165px;
  left: 125px;
  width: 10px;
  height: 10px;
}
.loader .planet .spots span:nth-child(7) {
  top: 90px;
  left: 150px;
  width: 15px;
  height: 15px;
}
.loader p {
  color: #bacbd9;
  font-size: 14px;
  z-index: 2;
  position: absolute;
  bottom: -20px;
  font-family: "Roboto Mono", monospace;
  animation: text 4s ease infinite;
  width: 100px;
  text-align: center;
}
@keyframes text {
  0% {
    transform: translateX(-30px);
    letter-spacing: 0px;
    color: #bacbd9;
  }
  25% {
    letter-spacing: 3px;
    color: #7ea1bf;
  }
  50% {
    transform: translateX(30px);
    letter-spacing: 0px;
    color: #bacbd9;
  }
  75% {
    letter-spacing: 3px;
    color: #7ea1bf;
  }
  100% {
    transform: translateX(-30px);
    letter-spacing: 0px;
    color: #bacbd9;
  }
}
`,
    }
    ,
    {
      id:"sdf",
      html:`    <div class="wrapper">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="shadow"></div>
      <div class="shadow"></div>
      <div class="shadow"></div>
      <span>Loading</span>
  </div>
`,
content:`    <div class="wrapper">
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="shadow"></div>
<div class="shadow"></div>
<div class="shadow"></div>
<span>Loading</span>
</div>
`,
css:`body{
  padding:0;
  margin:0;
  width:100%;
  height:100vh;
  background:radial-gradient(#9b59b6, #8e44ad);
}
.wrapper{
  width:200px;
  height:60px;
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
}
.circle{
  width:20px;
  height:20px;
  position: absolute;
  border-radius: 50%;
  background-color: #fff;
  left:15%;
  transform-origin: 50%;
  animation: circle .5s alternate infinite ease;
}

@keyframes circle{
  0%{
      top:60px;
      height:5px;
      border-radius: 50px 50px 25px 25px;
      transform: scaleX(1.7);
  }
  40%{
      height:20px;
      border-radius: 50%;
      transform: scaleX(1);
  }
  100%{
      top:0%;
  }
}
.circle:nth-child(2){
  left:45%;
  animation-delay: .2s;
}
.circle:nth-child(3){
  left:auto;
  right:15%;
  animation-delay: .3s;
}
.shadow{
  width:20px;
  height:4px;
  border-radius: 50%;
  background-color: rgba(0,0,0,.5);
  position: absolute;
  top:62px;
  transform-origin: 50%;
  z-index: -1;
  left:15%;
  filter: blur(1px);
  animation: shadow .5s alternate infinite ease;
}

@keyframes shadow{
  0%{
      transform: scaleX(1.5);
  }
  40%{
      transform: scaleX(1);
      opacity: .7;
  }
  100%{
      transform: scaleX(.2);
      opacity: .4;
  }
}
.shadow:nth-child(4){
  left: 45%;
  animation-delay: .2s
}
.shadow:nth-child(5){
  left:auto;
  right:15%;
  animation-delay: .3s;
}
.wrapper span{
  position: absolute;
  top:75px;
  font-family: 'Lato';
  font-size: 20px;
  letter-spacing: 12px;
  color: #fff;
  left:15%;
}
`
    },
    {
      id:"sdbvnmjhsdfvkf",
      html:`<div class="loader">
      <div class="inner">
          <div class="left"></div>
          <div class="middle"></div>
          <div class="right"></div>
      </div>
      <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
      </ul>
  </div>`,
content:`<div class="loader">
<div class="inner">
    <div class="left"></div>
    <div class="middle"></div>
    <div class="right"></div>
</div>
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
</div>`,
css:`.loader {
  --color: #fff;
  --duration: 6.8s;
  width: 32px;
  height: 12px;
  position: relative;
  margin: 32px 0 0 0;
  zoom: 1.5;
}
.loader .inner {
  width: 32px;
  height: 12px;
  position: relative;
  transform-origin: 2px 2px;
  transform: rotateZ(-90deg);
  animation: loader var(--duration) ease infinite;
}
.loader .inner .left, .loader .inner .right {
  width: 60px;
  height: 4px;
  top: 0;
  border-radius: 2px;
  background: var(--color);
  position: absolute;
}
.loader .inner .left:before, .loader .inner .right:before {
  content: '';
  width: 48px;
  height: 4px;
  border-radius: 2px;
  background: inherit;
  position: absolute;
  top: -10px;
  left: 6px;
}
.loader .inner .left {
  right: 28px;
  transform-origin: 58px 2px;
  transform: rotateZ(90deg);
  animation: left var(--duration) ease infinite;
}
.loader .inner .right {
  left: 28px;
  transform-origin: 2px 2px;
  transform: rotateZ(-90deg);
  animation: right var(--duration) ease infinite;
}
.loader .inner .middle {
  width: 32px;
  height: 12px;
  border: 4px solid var(--color);
  border-top: 0;
  border-radius: 0 0 9px 9px;
  transform: translateY(2px);
}
.loader ul {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  left: 50%;
  top: 0;
}
.loader ul li {
  height: 4px;
  border-radius: 2px;
  transform-origin: 100% 2px;
  width: 48px;
  right: 0;
  top: -10px;
  position: absolute;
  background: var(--color);
  transform: rotateZ(0deg) translateX(-18px);
  animation-duration: var(--duration);
  animation-timing-function: ease;
  animation-iteration-count: infinite;
}
.loader ul li:nth-child(0) {
  animation-name: page-0;
}
.loader ul li:nth-child(1) {
  animation-name: page-1;
}
.loader ul li:nth-child(2) {
  animation-name: page-2;
}
.loader ul li:nth-child(3) {
  animation-name: page-3;
}
.loader ul li:nth-child(4) {
  animation-name: page-4;
}
.loader ul li:nth-child(5) {
  animation-name: page-5;
}
.loader ul li:nth-child(6) {
  animation-name: page-6;
}
.loader ul li:nth-child(7) {
  animation-name: page-7;
}
.loader ul li:nth-child(8) {
  animation-name: page-8;
}
.loader ul li:nth-child(9) {
  animation-name: page-9;
}
.loader ul li:nth-child(10) {
  animation-name: page-10;
}
.loader ul li:nth-child(11) {
  animation-name: page-11;
}
.loader ul li:nth-child(12) {
  animation-name: page-12;
}
.loader ul li:nth-child(13) {
  animation-name: page-13;
}
.loader ul li:nth-child(14) {
  animation-name: page-14;
}
.loader ul li:nth-child(15) {
  animation-name: page-15;
}
.loader ul li:nth-child(16) {
  animation-name: page-16;
}
.loader ul li:nth-child(17) {
  animation-name: page-17;
}
.loader ul li:nth-child(18) {
  animation-name: page-18;
}
@keyframes page-0 {
  4 {
    transform: rotateZ(0deg) translateX(-18px);
  }
  13, 54 {
    transform: rotateZ(180deg) translateX(-18px);
  }
  63 {
    transform: rotateZ(0deg) translateX(-18px);
  }
}
@keyframes page-1 {
  5.86 {
    transform: rotateZ(0deg) translateX(-18px);
  }
  14.74, 55.86 {
    transform: rotateZ(180deg) translateX(-18px);
  }
  64.74 {
    transform: rotateZ(0deg) translateX(-18px);
  }
}
@keyframes page-2 {
  7.72 {
    transform: rotateZ(0deg) translateX(-18px);
  }
  16.48, 57.72 {
    transform: rotateZ(180deg) translateX(-18px);
  }
  66.48 {
    transform: rotateZ(0deg) translateX(-18px);
  }
}
@keyframes page-3 {
  9.58 {
    transform: rotateZ(0deg) translateX(-18px);
  }
  18.22, 59.58 {
    transform: rotateZ(180deg) translateX(-18px);
  }
  68.22 {
    transform: rotateZ(0deg) translateX(-18px);
  }
}
@keyframes page-4 {
  11.44 {
    transform: rotateZ(0deg) translateX(-18px);
  }
  19.96, 61.44 {
    transform: rotateZ(180deg) translateX(-18px);
  }
  69.96 {
    transform: rotateZ(0deg) translateX(-18px);
  }
}
@keyframes page-5 {
  13.3 {
    transform: rotateZ(0deg) translateX(-18px);
  }
  21.7, 63.3 {
    transform: rotateZ(180deg) translateX(-18px);
  }
  71.7 {
    transform: rotateZ(0deg) translateX(-18px);
  }
}
@keyframes page-6 {
  15.16 {
    transform: rotateZ(0deg) translateX(-18px);
  }
  23.44, 65.16 {
    transform: rotateZ(180deg) translateX(-18px);
  }
  73.44 {
    transform: rotateZ(0deg) translateX(-18px);
  }
}
@keyframes page-7 {
  17.02 {
    transform: rotateZ(0deg) translateX(-18px);
  }
  25.18, 67.02 {
    transform: rotateZ(180deg) translateX(-18px);
  }
  75.18 {
    transform: rotateZ(0deg) translateX(-18px);
  }
}
@keyframes page-8 {
  18.88 {
    transform: rotateZ(0deg) translateX(-18px);
  }
  26.92, 68.88 {
    transform: rotateZ(180deg) translateX(-18px);
  }
  76.92 {
    transform: rotateZ(0deg) translateX(-18px);
  }
}
@keyframes page-9 {
  20.74 {
    transform: rotateZ(0deg) translateX(-18px);
  }
  28.66, 70.74 {
    transform: rotateZ(180deg) translateX(-18px);
  }
  78.66 {
    transform: rotateZ(0deg) translateX(-18px);
  }
}
@keyframes page-10 {
  22.6 {
    transform: rotateZ(0deg) translateX(-18px);
  }
  30.4, 72.6 {
    transform: rotateZ(180deg) translateX(-18px);
  }
  80.4 {
    transform: rotateZ(0deg) translateX(-18px);
  }
}
@keyframes page-11 {
  24.46 {
    transform: rotateZ(0deg) translateX(-18px);
  }
  32.14, 74.46 {
    transform: rotateZ(180deg) translateX(-18px);
  }
  82.14 {
    transform: rotateZ(0deg) translateX(-18px);
  }
}
@keyframes page-12 {
  26.32 {
    transform: rotateZ(0deg) translateX(-18px);
  }
  33.88, 76.32 {
    transform: rotateZ(180deg) translateX(-18px);
  }
  83.88 {
    transform: rotateZ(0deg) translateX(-18px);
  }
}
@keyframes page-13 {
  28.18 {
    transform: rotateZ(0deg) translateX(-18px);
  }
  35.62, 78.18 {
    transform: rotateZ(180deg) translateX(-18px);
  }
  85.62 {
    transform: rotateZ(0deg) translateX(-18px);
  }
}
@keyframes page-14 {
  30.04 {
    transform: rotateZ(0deg) translateX(-18px);
  }
  37.36, 80.04 {
    transform: rotateZ(180deg) translateX(-18px);
  }
  87.36 {
    transform: rotateZ(0deg) translateX(-18px);
  }
}
@keyframes page-15 {
  31.9 {
    transform: rotateZ(0deg) translateX(-18px);
  }
  39.1, 81.9 {
    transform: rotateZ(180deg) translateX(-18px);
  }
  89.1 {
    transform: rotateZ(0deg) translateX(-18px);
  }
}
@keyframes page-16 {
  33.76 {
    transform: rotateZ(0deg) translateX(-18px);
  }
  40.84, 83.76 {
    transform: rotateZ(180deg) translateX(-18px);
  }
  90.84 {
    transform: rotateZ(0deg) translateX(-18px);
  }
}
@keyframes page-17 {
  35.62 {
    transform: rotateZ(0deg) translateX(-18px);
  }
  42.58, 85.62 {
    transform: rotateZ(180deg) translateX(-18px);
  }
  92.58 {
    transform: rotateZ(0deg) translateX(-18px);
  }
}
@keyframes page-18 {
  37.48 {
    transform: rotateZ(0deg) translateX(-18px);
  }
  44.32, 87.48 {
    transform: rotateZ(180deg) translateX(-18px);
  }
  94.32 {
    transform: rotateZ(0deg) translateX(-18px);
  }
}
@keyframes left {
  4% {
    transform: rotateZ(90deg);
  }
  10%, 40% {
    transform: rotateZ(0deg);
  }
  46%, 54% {
    transform: rotateZ(90deg);
  }
  60%, 90% {
    transform: rotateZ(0deg);
  }
  96% {
    transform: rotateZ(90deg);
  }
}
@keyframes right {
  4% {
    transform: rotateZ(-90deg);
  }
  10%, 40% {
    transform: rotateZ(0deg);
  }
  46%, 54% {
    transform: rotateZ(-90deg);
  }
  60%, 90% {
    transform: rotateZ(0deg);
  }
  96% {
    transform: rotateZ(-90deg);
  }
}
@keyframes loader {
  4% {
    transform: rotateZ(-90deg);
  }
  10%, 40% {
    transform: rotateZ(0deg);
    transform-origin: 2px 2px;
  }
  40.01%, 59.99% {
    transform-origin: 30px 2px;
  }
  46%, 54% {
    transform: rotateZ(90deg);
  }
  60%, 90% {
    transform: rotateZ(0deg);
    transform-origin: 2px 2px;
  }
  96% {
    transform: rotateZ(-90deg);
  }
}
html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}
* {
  box-sizing: inherit;
}
*:before, *:after {
  box-sizing: inherit;
}
body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #275EFE;
}
`
    },{
      id:"ef",
      html:`<div class="loader">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>`,
    content:`
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  `,
  css:`
  .loader {
    $colors: #7ef9ff, #89cff0, #4682b4, #0f52ba, #000080;
    display: flex;
  
    .dot {
      position: relative;
      width: 2em;
      height: 2em;
      margin: 0.8em;
      border-radius: 50%;
  
      &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: inherit;
        border-radius: inherit;
        animation: wave 2s ease-out infinite;
      }
  
      @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
          background: nth($colors, $i);
  
          &::before {
            animation-delay: $i * 0.2s;
          }
        }
      }
    }
  }
  
  @keyframes wave {
    50%,
    75% {
      transform: scale(2.5);
    }
  
    80%,
    100% {
      opacity: 0;
    }
  }
  `
    }
    
]