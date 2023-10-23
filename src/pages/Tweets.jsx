import { useEffect, useState } from 'react';
import { TweetList } from './components/TweetList/TweetList.jsx';
import { PagginationList } from './components/PagginationList/PagginationList.jsx';

// const followed = true;
const tweetsDb = [
  {
    tweets: 1000000017724,
    user: 'Irene Walsh',
    avatar: '',
    followers: 95130,
    id: '1',
  },
  {
    tweets: 94302,
    user: 'Roman Klein',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/476.jpg',
    followers: 61132,
    id: '2',
  },
  {
    tweets: 36298,
    user: 'Nicolas Morissette Jr.',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/226.jpg',
    followers: 7098,
    id: '3',
  },
  {
    tweets: 97587,
    user: 'Salvatore Stanton',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/788.jpg',
    followers: 97962,
    id: '4',
  },
  {
    tweets: 68007,
    user: 'Dr. Randy Krajcik',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/560.jpg',
    followers: 40481,
    id: '5',
  },
  {
    tweets: 94376,
    user: 'Iris Kreiger PhD',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg',
    followers: 55515,
    id: '6',
  },
  {
    tweets: 17292,
    user: 'Clyde Bartell',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/265.jpg',
    followers: 54070,
    id: '7',
  },
  {
    tweets: 31439,
    user: 'Jill Romaguera',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/543.jpg',
    followers: 12308,
    id: '8',
  },
  {
    tweets: 178,
    user: 'Ricardo Moore',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/664.jpg',
    followers: 51281,
    id: '9',
  },
  {
    tweets: 16928,
    user: 'Dr. Henry Marquardt',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/114.jpg',
    followers: 81026,
    id: '10',
  },
  {
    tweets: 2505,
    user: 'Edna Upton',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/210.jpg',
    followers: 85096,
    id: '11',
  },
  {
    tweets: 52240,
    user: 'Stacey Jenkins',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/65.jpg',
    followers: 84803,
    id: '12',
  },
  {
    tweets: 34806,
    user: 'Allen Funk',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/373.jpg',
    followers: 99622,
    id: '13',
  },
  {
    tweets: 69370,
    user: 'Cathy Jones',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/653.jpg',
    followers: 7709,
    id: '14',
  },
  {
    tweets: 32084,
    user: 'Katrina Mraz',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/358.jpg',
    followers: 2583,
    id: '15',
  },
  {
    tweets: 12851,
    user: 'Raquel Doyle',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/841.jpg',
    followers: 62809,
    id: '16',
  },
  {
    tweets: 90865,
    user: 'Mona Hodkiewicz',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1238.jpg',
    followers: 53993,
    id: '17',
  },
  {
    tweets: 56417,
    user: 'Jean Boehm MD',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/318.jpg',
    followers: 19084,
    id: '18',
  },
  {
    tweets: 33349,
    user: 'Lucille Beier',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/909.jpg',
    followers: 83918,
    id: '19',
  },
  {
    tweets: 50626,
    user: 'Jeanette Ledner',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/545.jpg',
    followers: 80167,
    id: '20',
  },
  {
    tweets: 75317,
    user: 'Kathleen Blanda',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/415.jpg',
    followers: 55299,
    id: '21',
  },
  {
    tweets: 11335,
    user: 'Ms. Yvonne Abshire',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/512.jpg',
    followers: 41206,
    id: '22',
  },
  {
    tweets: 75367,
    user: 'Anita Gerlach',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/682.jpg',
    followers: 99032,
    id: '23',
  },
  {
    tweets: 53587,
    user: 'Pete Kiehn',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/271.jpg',
    followers: 25987,
    id: '24',
  },
  {
    tweets: 16181,
    user: 'Wm Pfannerstill',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/747.jpg',
    followers: 38779,
    id: '25',
  },
  {
    tweets: 16638,
    user: 'Kyle Ullrich IV',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/237.jpg',
    followers: 12456,
    id: '26',
  },
  {
    tweets: 14155,
    user: 'Miss Kay Cartwright',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/481.jpg',
    followers: 48755,
    id: '27',
  },
  {
    tweets: 16149,
    user: 'Jesse Botsford',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/462.jpg',
    followers: 65120,
    id: '28',
  },
  {
    tweets: 37951,
    user: 'Nicolas Greenfelder',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/104.jpg',
    followers: 62064,
    id: '29',
  },
  {
    tweets: 45882,
    user: 'Willis Ullrich',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/965.jpg',
    followers: 40334,
    id: '30',
  },
  {
    tweets: 92113,
    user: 'Geoffrey Torp',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/962.jpg',
    followers: 27552,
    id: '31',
  },
  {
    tweets: 29500,
    user: 'Sally Huels',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/431.jpg',
    followers: 52122,
    id: '32',
  },
  {
    tweets: 44116,
    user: 'Ricardo Bernhard',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/23.jpg',
    followers: 87076,
    id: '33',
  },
  {
    tweets: 74731,
    user: 'Kendra McDermott',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/706.jpg',
    followers: 75417,
    id: '34',
  },
  {
    tweets: 68485,
    user: 'Spencer Ebert',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/562.jpg',
    followers: 32309,
    id: '35',
  },
  {
    tweets: 13530,
    user: 'Dixie Runolfsson',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/772.jpg',
    followers: 32980,
    id: '36',
  },
  {
    tweets: 27627,
    user: "Janice O'Conner",
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/948.jpg',
    followers: 34666,
    id: '37',
  },
  {
    tweets: 49359,
    user: 'Kenneth Stroman V',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/873.jpg',
    followers: 92975,
    id: '38',
  },
  {
    tweets: 53863,
    user: 'Tasha Abshire',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/535.jpg',
    followers: 28952,
    id: '39',
  },
  {
    tweets: 37685,
    user: 'Doyle Donnelly',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1046.jpg',
    followers: 97833,
    id: '40',
  },
  {
    tweets: 43008,
    user: 'Stewart Wuckert',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/544.jpg',
    followers: 41068,
    id: '41',
  },
  {
    tweets: 76310,
    user: 'Arthur Johns',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/108.jpg',
    followers: 55108,
    id: '42',
  },
  {
    tweets: 37919,
    user: 'Dr. Pat Macejkovic',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1188.jpg',
    followers: 91876,
    id: '43',
  },
  {
    tweets: 92639,
    user: 'Kristi Mraz',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/308.jpg',
    followers: 47424,
    id: '44',
  },
  {
    tweets: 87341,
    user: 'Virgil Bergstrom',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/280.jpg',
    followers: 89156,
    id: '45',
  },
  {
    tweets: 5070,
    user: 'Sonja Paucek',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/558.jpg',
    followers: 95510,
    id: '46',
  },
  {
    tweets: 48337,
    user: 'Denise Beer',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1016.jpg',
    followers: 68688,
    id: '47',
  },
  {
    tweets: 11157,
    user: 'Alan Robel',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1057.jpg',
    followers: 19159,
    id: '48',
  },
  {
    tweets: 99657,
    user: 'Andrea Kilback',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/37.jpg',
    followers: 67178,
    id: '49',
  },
  {
    tweets: 23520,
    user: 'Carole Grimes IV',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1233.jpg',
    followers: 83289,
    id: '50',
  },
];
let count = 3;
const lastPage = Math.ceil(tweetsDb.length / count);

export const App = () => {
  const [currentPage, setPage] = useState(1);
  const [tweetsToView, setTweetsToView] = useState(() =>
    tweetsDb.slice((currentPage - 1) * count, currentPage * count)
  );
  const [followedArr, setFollowedArr] = useState([]);

  useEffect(() => {
    setTweetsToView([
      ...tweetsDb.slice((currentPage - 1) * count, currentPage * count),
    ]);
  }, [currentPage]);

  useEffect(() => {
    // save followedArr to LS
  }, [followedArr]);

  const onPressHandle = id => {
    const tweetId = tweetsToView.findIndex(item => item.id === id);
    const updatedTTV = [...tweetsToView];
    const updatedFA = [...followedArr];
    if (followedArr.includes(id)) {
      const index = followedArr.findIndex(item => item === id);
      updatedFA.splice(index, 1);
      updatedTTV[tweetId].followers--;
    } else {
      updatedFA.push(id);
      updatedTTV[tweetId].followers++;
    }
    setTweetsToView(updatedTTV);
    setFollowedArr(updatedFA);
  };

  const incrementPage = page => {
    setPage(prevPage => prevPage + 1);
    setTweetsToView([...tweetsDb.slice((page - 1) * count, page * count)]);
  };

  const decrementPage = page => {
    setPage(prevPage => prevPage - 1);
    setTweetsToView([...tweetsDb.slice((page - 1) * count, page * count)]);
  };

  const isFollowedCheck = id => {
    return followedArr.includes(id);
  };

  return (
    <>
      <TweetList
        tweetsToView={tweetsToView}
        onPressHandle={onPressHandle}
        followedArr={followedArr}
        isFollowedCheck={isFollowedCheck}
      />
      <PagginationList
        currentPage={currentPage}
        lastPage={lastPage}
        setPage={setPage}
        incrementPage={incrementPage}
        decrementPage={decrementPage}
      />
    </>
  );
};
