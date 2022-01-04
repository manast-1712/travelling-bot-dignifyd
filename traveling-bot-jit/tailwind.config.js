module.exports = {
  mode: "jit",
  purge: {
    content:[ 
    './public/**/*.html',
    './src/**/*.{js,jsx}',]
  },
  content: [],
  theme: {
    extend: {
      colors:{
        skyBlue:"#0080FF",
        darkBlue:"#00264D",
        proGray:{
          100:"#F1F5F9", 
          200:"#E3EBF3",
          300:"#BFCCD9",
          400:"#698096",
        },
        LightOrange:"#ff690f",
        DarkOrange:"#ee4719",
        LightBlack:"#606264",
        outline:"#DEE3E8",
        boxBack:"#F5F7F9",
      },
      screens: {
        '1900px':{'max':"1900px"},
        '1850px':{'max':"1850px"},
        '1800px':{'max':"1800px"},
        '1750px':{'max':"1750px"},
        '1700px':{'max':"1700px"}, //
        '1650px':{'max':'1650px'},
        '1550px':{'max':'1550px'},
        '1530px':{'max':'1530px'},
        '1517px':{'max':"1517px"}, //
        '1497px':{'max':'1497px'}, 
        '1450px':{'max':'1450px'},
        '1416px':{'max':'1416px'}, //
        '1400px':{'max':'1400px'},
        '1401px':{'min':'1401px'}, //
        '1380px':{'max':'1380px'},
        '1390px':{'max':'1390px'}, //
        '1330px':{'max':"1330px"}, //
        '1296px':{'max':"1296px"}, //
        '1268px':{'max':'1268px'}, //
        '1230px':{'max':"1230px"}, //
        '1224px':{'max':"1224px"},
        '1200px':{'max':"1200px"},
        '1198px':{'max':'1198px'},
        '1168px':{'max':"1168px"},
        '1148px':{'max':'1148px'},
        '1132px':{'max':"1132px"}, //
        '1100px':{'max':'1100px'},
        '1080px':{'max':"1080px"}, //
        '1070px':{'max':"1070px"},
        '1024px':{'max':'1024px'}, //
        '1015px':{'max':"1015px"},
        '1000px':{'max':'1000px'},
        '975px':{'max':"975px"}, //
        '950px':{'max':'950px'},
        '925px':{'max':"925px"},
        '900px':{'max':'900px'}, //
        '875px':{'max':"875px"},
        '850px':{'max':'850px'},
        '825px':{'max':"825px"},
        '800px':{'max':'800px'},
        '768px':{'max':'768px'}, //
        '725px':{'max':"725px"},
        '700px':{'max':"700px"},
        '675px':{'max':'675px'},
        '650px':{'max':'650px'},
        '625px':{'max':"625px"}, //
        '600px':{'max':"600px"}, //
        '550px':{'max':"550px"},
        '500px':{'max':"500px"},
        '428px':{'max':"428px"}, //
        '414px':{'max':"320px"},
        '411px':{'max':"411px"},
        '375px':{'max':"375px"},
        '360px':{'max':"360px"},
        '351px':{'max':"351px"},
        '320px':{'max':"320px"},
        '280px':{'max':"280px"},
        'tabMin':{'min':"825px"},
        'tabMax':{'max':"825px"}
      },
      fontSize: {
        '10rem':'10rem',
        '9.5rem':'9.5rem',
        '9rem':'9rem',
        '8.5rem':'8.5rem',
        '8rem':'8rem',
        '7.5rem':'2rem',
        '7rem':'7rem',
        '6.5rem':'6.5rem',
        '6rem':'6rem',
        '5.5rem':'5.5rem',
        '5rem':'5rem',
        '4.5rem':'4.5rem',
        '4rem':'4.5rem',
        '3.5rem':'3.5rem',
        '3rem':'3rem',
        '2.5rem':'2.5rem',
        '2.3rem':'2.3rem',
        
        '2.2rem':'2.2rem',
        '2.1rem':"2.1rem",
        '2rem':'2rem',
        '1.9rem':'1.9rem',
        '1.8rem':'1.8rem',
        '1.7rem':'1.7rem',
        '1.6rem':'1.6rem',
        '1.5rem':'1.5rem',
        '1.4rem':'1.4rem',
        '1.35rem':'1.35rem',
        '1.3rem':'1.3rem',
        '1.25rem':'1.25rem',
        '1.2rem':"1.2rem",
        '1.19rem':'1.19rem',
        '1.18rem':'1.18rem',
        '1.17rem':'1.17rem',
        '1.16rem':'1.16rem',
        '1.15rem':'1.15rem',
        '1.14rem':'1.14rem',
        '1.1rem':'1.1rem',
        '1rem':'1rem',
        '0.95':'0.95',
        '0.9rem':'0.9rem',
        '0.85rem':'0.85rem',
        '0.8rem':'0.8rem',
        '0.75rem':'0.75rem',
        '0.7rem':'0.7rem',
        '0.65rem':"0.65rem",
        '0.6rem':"0.6rem",
        '0.5rem':"0.5rem",
        '0.4rem':"0.4rem",
        '0.3rem':"0.3rem",
        '0.2rem':"0.2rem",
      },
      boxShadow: {
        'proShadow1':"rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
        'proShadow2':"rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset", //85
        'proShadow4':" rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px", //37
        'ShadowLine':"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset", //90
        'cardShadow':"rgba(0, 0, 0, 0.24) 0px 3px 8px;", //5
        'HoverShadow2':"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px", //56
        'prime1':"0 4px 6px 0 rgba(0, 0, 0, 0.2)",
        'Inputprime':"inset 0 2px 4px 0 rgba(0, 0, 0, 0.08)",
        'insideShadow':"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;" //25
      },
      gridTemplateColumns: {
        '36': 'repeat(36, minmax(0, 1fr))',
        '72': 'repeat(72, minmax(0, 1fr))',
       },
       gridColumnStart: {
        '13':'13',
        '15':'15',
        '16':'16',
        '24':'24',
        '25':'25',
        '26':'26',
        '25':'25',
        '27':'27',
        '28':'28',
        '29':'29',
        '30':'30',
        '36':'36',
        '37':'37',
        '55':'55',
        '57':'57',
        '60':'60',
        '61':'61',
        '62':'62',
        '63':'63',
        '64':'64',
        '65':'65',
       '66':'66',
        '67':'67',
        '68':'68',
       },
       gridColumnEnd: {
        '13':'13',
        '15':'15',
        '16':'16',
        '24':'24',
        '25':'25',
        '26':'26',
        '27':'27',
        '28':'28',
        '29':'29',
        '30':'30',
        '36':'36',
        '37':'37',
        '55':'55',
        '57':'57',
        '60':'60',
        '61':'61',
        '62':'62',
        '63':'63',
        '64':'64',
        '65':'65',
        '66':'66',
        '67':'67',
        '68':'68',
        '72':'72',
        '73':'73',
       },
       gridColumn: {
        'span-11': 'span 11 / span 11',
        'span-13': 'span 13 / span 13',
        'span-33': 'span 33 / span 33',
        'span-60':'span 60/ span 60'
       },
       scale: {
        '101':'1.01',
        '102':'1.02',
        '103':'1.03'
      },
      transitionProperty: {
        'width': 'width'
      },
    },
  },
  plugins: [],
}