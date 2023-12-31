import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: null, name: "WYFF4 Greenville" },
      author: "Janice Limon",
      title:
        "Annular solar eclipse set to cast shadow on South Carolina, North Carolina, Georgia next week - WYFF4 Greenville",
      description:
        "Grab your solar viewers--the first of two solar eclipses visible over the next seven months is next week, and the Upstate will experience part of it.",
      url: "https://www.wyff4.com/article/solar-eclipse-south-carolina-north-carolina-georgia/45467795",
      urlToImage:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/ap09072201944-65202ca761b84.jpg?crop=1.00xw:0.872xh;0,0&resize=1200:*",
      publishedAt: "2023-10-07T03:18:00Z",
      content:
        "GREENVILLE, S.C. —Grab your solar viewers--the first of two solar eclipses visible over the next seven months is next week, and the Upstate will experience part of it.\r\nThe annular solar eclipse path… [+1721 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Radina Gigova",
      title:
        "10-year-old boy killed in Kharkiv was asleep when Russian missile hit, Ukraine says - CNN",
      description:
        "A 10-year-old boy who was killed by Russia’s strike on the city of Kharkiv on Friday was apparently asleep when missiles hit residential buildings, Ukrainian officials said.",
      url: "https://www.cnn.com/2023/10/06/europe/10-year-old-ukraine-boy-asleep-when-russia-drone-strike-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/231006215516-02-kharkiv-attack-100623.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-10-07T02:21:00Z",
      content:
        "A 10-year-old boy who was killed by Russias strike on the city of Kharkiv on Friday was apparently asleep when missiles hit residential buildings, Ukrainian officials said.\r\nA picture purporting to s… [+2230 chars]",
    },
    {
      source: { id: null, name: "SciTechDaily" },
      author: null,
      title:
        "Ancient Footprints in New Mexico Shift Timeline for Early Human Presence in North America - SciTechDaily",
      description:
        "Two new lines of evidence support the 21,000 to 23,000-year age estimate of the footprints first described and dated in 2021. In 2021, scientific dating results from footprints found at White Sands National Park in New Mexico began a global conversation that …",
      url: "https://scitechdaily.com/?p=315130",
      urlToImage:
        "https://scitechdaily.com/images/Fossilized-Footprints-in-White-Sands-National-Park-scaled.jpg",
      publishedAt: "2023-10-07T02:14:16Z",
      content:
        "ByU.S. Geological SurveyOctober 6, 2023\r\nFossilized footprints in White Sands National Park sparked a scientific debate. Subsequent research, using different dating methods, consistently supports the… [+4584 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Lisa Respers France",
      title:
        "Travis Kelce's mom Donna says Taylor Swift attention 'feels like an alternate universe' - CNN",
      description:
        "Donna Kelce is fully aware of what the world wants to know. She also is fully protective of her son Travis Kelce and his personal life - especially when it comes to Taylor Swift.",
      url: "https://www.cnn.com/2023/10/06/entertainment/donna-kelce-travis-taylor/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230925100029-taylor-swift-kansas-city-chiefs-game-0924.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-10-07T01:49:00Z",
      content:
        "Donna Kelce is fully aware of what the world wants to know.\r\nShe also is fully protective of her son Travis Kelce and his personal life.\r\nI dont talk about it much, she told CNN Friday. Its basically… [+2288 chars]",
    },
    {
      source: { id: "politico", name: "Politico" },
      author: null,
      title:
        "Kaiser health care strike will end with no contract deal - POLITICO",
      description:
        "The next bargaining session between Kaiser Permanente and hospital workers isn’t scheduled until Oct. 12.",
      url: "https://www.politico.com/news/2023/10/06/kaiser-health-care-strike-no-contract-deal-00120479",
      urlToImage:
        "https://static.politico.com/53/ac/c883b3214eb18e7fd45375d7bea1/https-delivery-gettyimages.com/downloads/1720876418",
      publishedAt: "2023-10-07T01:19:10Z",
      content:
        "Most Kaiser facilities are located in California, where the nonprofit company is headquartered and momentum from a summer filled with strikes and worker protests has carried over into the fall. The o… [+1537 chars]",
    },
    {
      source: { id: null, name: "Eonline.com" },
      author: "Elyse Dupre, Lindsay Weinberg",
      title:
        "Ariana Grande and Dalton Gomez Settle Divorce 6 Months After Breakup - E! NEWS",
      description:
        "Less than a month after Ariana Grande and Dalton Gomez filed for divorce, the singer and real estate agent, who wed in 2021, settled the details of their separation.",
      url: "https://www.eonline.com/news/1380417/ariana-grande-and-dalton-gomez-settle-divorce-6-months-after-breakup",
      urlToImage:
        "https://akns-images.eonline.com/eol_images/Entire_Site/2020930/rs_1200x1200-201030150816-1200-ariana-grande-dalton-gomez.ct.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
      publishedAt: "2023-10-07T01:15:00Z",
      content:
        "Ariana Grande is breaking free from her marriage to Dalton Gomez. \r\nThe singer and real estate broker settled their divorce on Oct. 6, according to multipleoutlets. TMZ, citing the settlement, report… [+728 chars]",
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: null,
      title:
        "2023 Nobel Peace Prize awarded to Narges Mohammadi, women's rights activist jailed in Iran - CBS News",
      description:
        "The Nobel Peace Prize winner was chosen by a panel of experts from a list of just over 350 nominations.",
      url: "https://www.cbsnews.com/news/nobel-peace-prize-2023-winner-narges-mohammadi-iran-womens-rights-activist/",
      urlToImage:
        "https://assets3.cbsnewsstatic.com/hub/i/r/2023/10/06/d7c082b2-1cf9-41cc-b00b-60e99052e404/thumbnail/1200x630/095a3b832e6432d56e697aba27f0b9c9/narges-mohammadi-iran.jpg?v=f334c339940ae79342a8ce7757900604",
      publishedAt: "2023-10-06T23:27:00Z",
      content:
        "Narges Mohammadi, a jailed Iranian women's rights advocate, won the 2023 Nobel Peace Prize on Friday. The former vice president of the Defenders of Human Rights Center (DHRC) organization was chosen … [+4489 chars]",
    },
    {
      source: { id: null, name: "OregonLive" },
      author: "Joel Odom | The Oregonian/OregonLive",
      title:
        "Pac-12 football Week 6 odds, score predictions: Will Oregon State, WSU, Colorado all win on the road? - OregonLive",
      description: "Check out this week’s Pac-12 odds and score predictions.",
      url: "https://www.oregonlive.com/collegefootball/2023/10/pac-12-football-week-6-odds-score-predictions-will-oregon-state-wsu-colorado-all-win-on-the-road.html",
      urlToImage:
        "https://www.oregonlive.com/resizer/CzTnh6uztAnokBPhaD-Xl0vaMd0=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/2KRVBUN4YZAKFKTJEZ3FWR3CPE.jpg",
      publishedAt: "2023-10-06T21:50:00Z",
      content: null,
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: "Reuters",
      title:
        "US doesn't want to build new sections of border wall, Mexico says - Reuters",
      description:
        "The U.S. government does not want to build new sections of wall on its border with Mexico, Mexican President Andres Manuel Lopez Obrador said on Friday, expressing doubt that the planned construction would be carried out.",
      url: "https://www.reuters.com/world/us-govt-doesnt-want-build-new-sections-border-wall-mexico-says-2023-10-06/",
      urlToImage:
        "https://www.reuters.com/resizer/4u4ihFhWCXwPMWsrnfvSp0BzzHU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7SYTBL2RWFN4RC7GEFNNS44LHU.jpg",
      publishedAt: "2023-10-06T21:48:00Z",
      content:
        "MEXICO CITY, Oct 6 (Reuters) - The U.S. government does not want to build new sections of wall on its border with Mexico, Mexican President Andres Manuel Lopez Obrador said on Friday, expressing doub… [+1197 chars]",
    },
    {
      source: { id: null, name: "[Removed]" },
      author: null,
      title: "[Removed]",
      description: "[Removed]",
      url: "https://removed.com",
      urlToImage: null,
      publishedAt: "1970-01-01T00:00:00Z",
      content: "[Removed]",
    },
    {
      source: { id: null, name: "9to5Mac" },
      author: "Filipe Espósito",
      title:
        "Instagram CEO says iPad app still not a priority, but may work on it at some point - 9to5Mac",
      description:
        "As you probably know, Instagram still doesn’t have an iPad app. The platform was born as an iPhone app, and...",
      url: "https://9to5mac.com/2023/10/06/instagram-ceo-ipad-app-not-a-priority/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2018/12/instagram-buy-an-ipad.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-10-06T20:39:00Z",
      content:
        "As you probably know, Instagram still doesn’t have an iPad app. The platform was born as an iPhone app, and although it’s now on Android and the web, Meta has never bothered to optimize Instagram for… [+2301 chars]",
    },
    {
      source: { id: null, name: "WABC-TV" },
      author: null,
      title:
        "AccuWeather Alert: New Yorkers urged by Gov. Kathy Hochul to prepare for another weekend of heavy rain, flash flooding - WABC-TV",
      description:
        "This will mark the fifth weekend in a row with measurable rain in Central Park, according to the National Weather Service.",
      url: "https://abc7ny.com/heavy-rain-flash-flooding-forecast-this-weekend-new-york-weather/13871403/",
      urlToImage:
        "https://cdn.abcotvs.com/dip/images/13871494_100623-wabc-AP-rain-nyc-img.jpg?w=1600",
      publishedAt: "2023-10-06T20:37:30Z",
      content:
        "NEW YORK (WABC) -- Heavy rain is expected to hit our area once again this weekend. This will mark the fifth weekend in a row with measurable rain in Central Park, according to the National Weather Se… [+4201 chars]",
    },
    {
      source: { id: null, name: "Rolling Stone" },
      author: "Jon Blistein",
      title:
        "‘Love Is Blind’ Contestant Claims Ex-Fiancé Sexually Assaulted Her on Set - Rolling Stone",
      description:
        "A Season Five contestant — who has not been featured on the show — filed her lawsuit over the alleged incident last year",
      url: "https://www.rollingstone.com/tv-movies/tv-movie-news/love-is-blind-contestant-claims-sexual-assault-on-set-1234848395/",
      urlToImage:
        "https://www.rollingstone.com/wp-content/uploads/2023/10/Love_Is_Blind_u_S5_E1_00_04_09_04R.jpg?w=1600&h=900&crop=1",
      publishedAt: "2023-10-06T20:26:17Z",
      content:
        "A Love Is Blindcontestant has filed a lawsuit claiming she was sexually assaulted on set by her former fiancé. \r\nIn the original lawsuit — filed in Aug. 2022, but only just revealed by People — Tran … [+4497 chars]",
    },
    {
      source: { id: "fortune", name: "Fortune" },
      author: "Will Daniel",
      title:
        "Buckle up for more ‘turbulence’ in the housing market, BofA says—it’s a housing recession, 1980s-style - Fortune",
      description:
        "“Looking back at previous housing recessions, we think the 1980s are a better analogy for today's market than the 2008 housing crash,” BofA economists say.",
      url: "https://fortune.com/2023/10/06/home-price-outlook-bank-of-america-housing-recession-turbulence-1980s-not-2008/",
      urlToImage:
        "https://content.fortune.com/wp-content/uploads/2023/10/GettyImages-1468619438-e1696598984276.jpg?resize=1200,600",
      publishedAt: "2023-10-06T20:05:00Z",
      content:
        "Housing market pessimists have been sounding the alarm for years about a pending crash in the U.S. residential real estate market. Even before the Federal Reserve began hiking interest rates to fight… [+5216 chars]",
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "Mike Masala",
      title:
        "Dolphins WR Tyreek Hill reacts to Chase Claypool trade - Dolphins Wire",
      description: "The Cheetah shares his thoughts on Miami’s trade.",
      url: "https://dolphinswire.usatoday.com/2023/10/06/dolphins-tyreek-hill-reacts-to-chase-claypool-trade/",
      urlToImage:
        "https://dolphinswire.usatoday.com/wp-content/uploads/sites/53/2023/10/USATSI_21548783.jpg?w=1024&h=576&crop=1",
      publishedAt: "2023-10-06T20:05:00Z",
      content:
        "The Miami Dolphins have made a few trades to acquire players in the last couple of seasons that have positively impacted the team.\r\nIn 2022, Miami acquired two Pro Bowlers in trades, wide receiver Ty… [+1253 chars]",
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "Amritpal Kaur Sandhu-Longoria",
      title:
        "Amazon Prime Day for October 2023 is here: Shop these deals - USA TODAY",
      description:
        "This second Prime event of the year, known as Prime Big Deal Days, comes just in time for the holiday season.",
      url: "https://www.usatoday.com/story/money/2023/10/06/amazon-prime-day-2023-october-10-deals/71076778007/",
      urlToImage:
        "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/10/06/USAT/71082203007-hero-20230925-prime-big-deal-days-hero-2-v-4.PNG?crop=2999,1687,x0,y0&width=2999&height=1687&format=pjpg&auto=webp",
      publishedAt: "2023-10-06T20:00:17Z",
      content:
        "Amazon Prime members can enjoy exclusive sales and savings starting Tuesday when the next Prime Day kicks off.\r\nThis second Prime event of the year, known as Prime Big Deal Days, comes just in time f… [+2392 chars]",
    },
    {
      source: { id: null, name: "NBC 10 Philadelphia" },
      author: "Hayden Mitman, Dan Stamm, David Chang",
      title:
        "Police ID suspect in murder of Philly advocate and journalist Josh Kruger - NBC 10 Philadelphia",
      description:
        "Police identified the suspect in the murder of Philadelphia journalist and advocate Josh Kruger as 19-year-old Robert Edmond Davis.",
      url: "https://www.nbcphiladelphia.com/news/local/arrest-warrant-issued-in-murder-of-philly-advocate-and-journalist-josh-kruger/3662013/",
      urlToImage:
        "https://media.nbcphiladelphia.com/2023/10/Kruger-10-2-23.jpg?quality=85&strip=all&resize=1200%2C675",
      publishedAt: "2023-10-06T19:56:58Z",
      content:
        "Police have identified the suspect in the murder of Josh Kruger, a 39-year-old LGBTQ+ and homelessness community advocate and journalist who was shot and killed inside his South Philadelphia home. \r\n… [+4187 chars]",
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: null,
      title:
        'Troopers who fatally shot "Cop City" activist near Atlanta won\'t be charged, prosecutor says - CBS News',
      description:
        "Georgia state troopers who shot and killed an environmental activist at the site of a planned police and firefighter training center near Atlanta will not be charged.",
      url: "https://www.cbsnews.com/news/no-charges-troopers-killing-cop-city-activist-manuel-paez-teran-georgia/",
      urlToImage:
        "https://assets3.cbsnewsstatic.com/hub/i/r/2023/03/13/c2946580-52e1-493a-9040-7cf3293a5e61/thumbnail/1200x630/c39f742fdfabff1e882f691f75fe0e16/ap23072564856656.jpg?v=f334c339940ae79342a8ce7757900604",
      publishedAt: "2023-10-06T19:32:00Z",
      content:
        "Georgia state troopers who shot and killed an environmental activist at the site of a planned police and firefighter training center near Atlanta will not be charged, a prosecutor announced Friday, s… [+7370 chars]",
    },
    {
      source: { id: null, name: "247Sports" },
      author: "Matt Baxendell",
      title: "Bucknuts expert roundtable: Maryland - 247Sports",
      description:
        "The Bucknuts staff gives their thoughts on the Buckeyes coming out of the open weekend and predicting ahead to the Terrapins.",
      url: "https://247sports.com/college/ohio-state/longformarticle/ohio-state-buckeyes-football-expert-roundtable-maryland-terrapins-predictions-217559924/",
      urlToImage:
        "https://s3media.247sports.com/Uploads/Assets/675/21/12021675.jpeg",
      publishedAt: "2023-10-06T18:46:43Z",
      content:
        "And they're back! Ohio State is done with the bye week and ready to play out the rest of the season. This means eight straight weeks of college football for us all!\r\nOhio State hosts Maryland on Satu… [+3161 chars]",
    },
    {
      source: { id: null, name: "Themessenger.com" },
      author: "Mansur Shaheen",
      title: "90% of COVID Deaths Are in 1 Group - The Messenger",
      description:
        "A single at risk group is accounting for nearly all deaths from COVID-19 being recorded at this point, according to a CDC report",
      url: "https://themessenger.com/health/covid-deaths-elderly-august-january",
      urlToImage:
        "https://cms.themessenger.com/wp-content/uploads/2023/10/palliative-care-1314187204.jpg",
      publishedAt: "2023-10-06T18:26:00Z",
      content:
        "Almost all of the COVID-19 deaths being recorded in America are among people 65 years and older, and a majority did not receive the bivalent booster shot that became available last year.\r\nThe Centers… [+2032 chars]",
    },
  ];

  constructor() {
    super();
    console.log("I am a constructor from News Component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h3>Newsify - Top Headlines</h3>
        <br />
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="myTitle"
              description="myDesc"
              imageUrl="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2018/12/instagram-buy-an-ipad.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1"
              newsUrl="TODO"
            />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDesc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDesc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
