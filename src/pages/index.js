import * as React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Helmet } from "react-helmet"


import AvenueQ from "../images/avenueQ/avenue-q.jpeg";
import AvenueQBack from "../images/avenueQ/avq-back.jpeg";
import DearEvanHansen from "../images/dearEvanHansen/dead_evan_hansen.jpeg";
import DearEvanHansenBack from "../images/dearEvanHansen/dearEvanHansenBack.png";
import Hamilton from "../images/hamilton/hamilton_score.jpg";
import HamiltonBack from "../images/hamilton/hamilton_score_back.jpeg";
import BookOfMormon from "../images/bookOfMormon/book_of_mormon_score.jpeg";
import BookOfMormonBack from "../images/bookOfMormon/book_of_mormon_score_back.jpeg";
import GreatestShowman from "../images/greatest_showman/greatest_showman.jpeg";
import GreatestShowmanBack from "../images/greatest_showman/greatest_showman_back.png";
import Grease from "../images/grease/grease_main.png";
import GreaseBack from "../images/grease/grease_back.jpeg";
import Frozen from "../images/frozen/frozen.jpeg";
import FrozenBack from "../images/frozen/frozen_back.jpeg";

import Hercules from "../images/hercules/hercules.jpeg";
import HerculesBack from "../images/hercules/back.png";
import IntoTheWoods from "../images/intoTheWoods/main.jpg";
import IntoTheWoodsBack from "../images/intoTheWoods/back.png";

import MamaMia from "../images/mamaMia/mama_mia.jpeg";
import MamaMiaBack from "../images/mamaMia/mama_mia_back.jpeg";

import HairSpray from "../images/hairspray/Hairspray.jpeg";
import HairSprayBack from "../images/hairspray/hairspray_back.jpeg";

import JekylHyde from "../images/jekyllHyde/main.jpg";
import JekylHydeBack from "../images/jekyllHyde/back.png";

import LaLaLand from "../images/lalaLand/main.png";
import LaLaLandBack from "../images/lalaLand/back.png";
import JCSuperstar from "../images/jesusChristSuperstar/jc-main.jpeg";
import JCSuperstarBack from "../images/jesusChristSuperstar/back.jpeg";
import Last5Years from "../images/last5years/last5years.jpg";
import Last5YearsBack from "../images/last5years/back.png";
import LesMiserables from "../images/lesmiserables/main.jpg";
import LesMiserablesBack from "../images/lesmiserables/back.png";
import LittleShop from "../images/littleShop/main.jpeg";
import LittleShopBack from "../images/littleShop/back.png";
import MeanGirls from "../images/meanGirls/main.jpg";
import MeanGirlsBack from "../images/meanGirls/back.png";
import Matilda from "../images/matilda/main.jpg";
import MatildaBack from "../images/matilda/back.png";
import MissSaigon from "../images/missSaigon/main.jpg";
import MissSaigonBack from "../images/missSaigon/back.png";
import Oklahoma from "../images/oklahoma/main.jpg";
import OklahomaBack from "../images/oklahoma/back.png";
import TheNightmareBeforeChristmas from "../images/nightmareBeforeChristmas/main.jpg";
import TheNightmareBeforeChristmasBack from "../images/nightmareBeforeChristmas/back.png";
import Oliver from "../images/oliver/main.jpg";
import OliverBack from "../images/oliver/back.jpeg";
import RockOfAges from "../images/rockOfAges/main.jpg";
import RockOfAgesBack from "../images/rockOfAges/back.png";
import RockyHorrorShow from "../images/rockyHorrorShow/main.jpg";
import RockyHorrorShowBack from "../images/rockyHorrorShow/back.png";
import Phantom from "../images/phantomOfTheOpera/main.jpg";
import PhantomBack from "../images/phantomOfTheOpera/back.png";

import AndLlWebAnthology from "../images/andrewLloydwebberAnthology/main.jpg";
import AndLlWebAnthologyBack1 from "../images/andrewLloydwebberAnthology/back1.png";
import AndLlWebAnthologyBack2 from "../images/andrewLloydwebberAnthology/back2.png";
import AndLlWebAnthologyBack3 from "../images/andrewLloydwebberAnthology/back3.png";
import AndLlWebAnthologyBack4 from "../images/andrewLloydwebberAnthology/back4.png";
import AndLlWebAnthologyBack5 from "../images/andrewLloydwebberAnthology/back5.png";
import AndLlWebAnthologyBack6 from "../images/andrewLloydwebberAnthology/back5.png";
import Wicked from "../images/wicked/main.jpg";
import WickedBack from "../images/wicked/back.png";
import SisterAct from "../images//sisterAct/main.jpg";
import SisterActBack from "../images//sisterAct/back.png";
import SweeneyTodd from "../images/sweeneyTodd/main.jpg";
import SweeneyToddBack from "../images/sweeneyTodd/back.png";
import SchoolOfRock from "../images/schoolOfRock/main.jpg";
import SchoolOfRockBack from "../images/schoolOfRock/back.png";
import Disney from "../images/disney/shopping.webp";
import DisneyBack1 from "../images/disney/back1.jpeg";
import DisneyBack2 from "../images/disney/back2.jpeg";
import StageAndScreen from "../images/stageAndScreen/main.jpeg";
import StageAndScreenBack from "../images/stageAndScreen/back.jpeg";
import Bg from "../images/bg.jpeg";
// data
const books = [
  {
    name: "Hairspray",
    frontCover: HairSpray,
    others: [HairSprayBack],
  },
  {
    name: "Mama Mia",
    frontCover: MamaMia,
    others: [MamaMiaBack],
  },
  {
    name: "Into The Woods",
    frontCover: IntoTheWoods,
    others: [IntoTheWoodsBack],
  },
  {
    name: "Hercules",
    frontCover: Hercules,
    others: [HerculesBack],
  },
  {
    name: "Frozen",
    frontCover: Frozen,
    others: [FrozenBack],
  },
  {
    name: "Avenue Q The Musical",
    frontCover: AvenueQ,
    others: [AvenueQBack],
  },
  {
    name: "Dear Evan Hansen",
    frontCover: DearEvanHansen,
    others: [DearEvanHansenBack],
  },
  {
    name: "Hamilton",
    frontCover: Hamilton,
    others: [HamiltonBack],
  },
  {
    name: "Book Of Mormon",
    frontCover: BookOfMormon,
    others: [BookOfMormonBack],
  },
  {
    name: "Grease",
    frontCover: Grease,
    others: [GreaseBack],
  },
  {
    name: "The Greatest Showman",
    frontCover: GreatestShowman,
    others: [GreatestShowmanBack],
  },
  {
    name: "Stage And Screen - 50 all time hit movie/musical songs",
    frontCover: StageAndScreen,
    others: [StageAndScreenBack],
  },
  {
    name: "Disney",
    frontCover: Disney,
    others: [DisneyBack1, DisneyBack2],
  },
  {
    name: "School Of Rock",
    frontCover: SchoolOfRock,
    others: [SchoolOfRockBack],
  },
  {
    name: "Sweeney Todd",
    frontCover: SweeneyTodd,
    others: [SweeneyToddBack],
  },
  {
    name: "Wicked",
    frontCover: Wicked,
    others: [WickedBack],
  },
  {
    name: "Sister Act",
    frontCover: SisterAct,
    others: [SisterActBack],
  },
  {
    name: "Andrew Lloyd Webber Anthology",
    frontCover: AndLlWebAnthology,
    others: [
      AndLlWebAnthologyBack6,
      AndLlWebAnthologyBack5,
      AndLlWebAnthologyBack4,
      AndLlWebAnthologyBack3,
      AndLlWebAnthologyBack2,
      AndLlWebAnthologyBack1,
    ],
  },
  {
    name: "Phantom Of The Opera",
    frontCover: Phantom,
    others: [PhantomBack],
  },
  {
    name: "Rocky Horrow Show",
    frontCover: RockyHorrorShow,
    others: [RockyHorrorShowBack],
  },
  {
    name: "Rock Of Ages",
    frontCover: RockOfAges,
    others: [RockOfAgesBack],
  },
  {
    name: "Oliver",
    frontCover: Oliver,
    others: [OliverBack],
  },
  {
    name: "Nightmare Before Christmas",
    frontCover: TheNightmareBeforeChristmas,
    others: [TheNightmareBeforeChristmasBack],
  },
  {
    name: "Oklahoma",
    frontCover: Oklahoma,
    others: [OklahomaBack],
  },
  {
    name: "Miss Saigon",
    frontCover: MissSaigon,
    others: [MissSaigonBack],
  },
  {
    name: "Matilda",
    frontCover: Matilda,
    others: [MatildaBack],
  },
  {
    name: "Mean Girls",
    frontCover: MeanGirls,
    others: [MeanGirlsBack],
  },
  {
    name: "The Little Shop Of Horrors",
    frontCover: LittleShop,
    others: [LittleShopBack],
  },
  {
    name: "Les Miserables",
    frontCover: LesMiserables,
    others: [LesMiserablesBack],
  },
  {
    name: "The Last Five Years",
    frontCover: Last5Years,
    others: [Last5YearsBack],
  },
  {
    name: "Jesus Christ Superstar",
    frontCover: JCSuperstar,
    others: [JCSuperstarBack],
  },
  {
    name: "La La Land",
    frontCover: LaLaLand,
    others: [LaLaLandBack],
  },
  {
    name: "Jekyll & Hyde",
    frontCover: JekylHyde,
    others: [JekylHydeBack],
  },
];

// markup
const IndexPage = () => {
  return (
    <main>
       <Helmet>
          <meta charSet="utf-8" />
          <title>Mistcast Belfast</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      {/* <div className="h-14 bg-gray-700 w-full">

      </div> */}
      <section className=" bg-blue-200 w-full flex justify-center items-center">
        <img src={Bg} className="w-full" />
        <div className="absolute w-3/5">
          <div className="border-b-2 border-white">
            <h1 className="text-3xl sm:text-6xl text-white mb-4 text-center uppercase tracking">
              Miscast
            </h1>
          </div>
          <div className="text-xl sm:text-4xl text-white pt-4 text-center">
            @ the lyric
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-8 pt-8 pb-8">
        <p className="font-bold text-xl text-red-600">
          And we're back!
        </p>
        <br />
        <p className="border-b-2 border-gray-200 w-full pb-4">
          The world is healing - it's been too long since strangers all sang mama mia in the same room together. A night of Miscast is finally here with it's usual craic but in person now. It's been a long time coming!
        </p>
        <br/>
        <p className="border-b-2 border-gray-200 w-full pb-4">
          Whether you're new or a veteran - a night at Miscast can be a specatator sport, but don't label yourself too soon - our mantra is it's not if you <strong>can</strong> sing, it's if you <strong>will</strong> sing. As the night progresses (and with the aid of the bar) the true performer can be awakened - so take a look through our book collection to find a song that fits.
        </p>
        <br/>
        <p>
          We only have one rule when choosing to sing, you can choose any song - as long as you can't be cast as that character. It's going to be a fun night!
        </p>
        <br />
        <p className="text-red-600">- Donal, Niall & Mark</p>
        <br />
        {books.map((book) => {
          return (
            <div className="w-full">
              <div className="w-full mx-auto bg-white rounded-2xl">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between items-center px-2 w-full py-2 text-sm font-medium text-left text-gray-900 bg-gray-100 rounded-sm hover:bg-gray-700 hover:text-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 group-hover:text-gray-200">
                        <img
                          className="h-24 object-contain"
                          src={book.frontCover}
                          alt={book.name}
                        />
                        <span className="text-center">{book.name}</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        {book.others.map((img) => {
                          return <img src={img} />;
                        })}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          );
        })}
      </section>
      <footer className="bg-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">&copy; 2021 Miscast Belfast, All rights reserved.</p>
      </div>
    </footer>
    </main>
  );
};

const navigation = {
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/miscastbelfast',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/miscastbelfast/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    }
  ],
}

export default IndexPage;
