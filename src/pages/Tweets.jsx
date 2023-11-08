import { useEffect, useState } from 'react';
import { TweetList } from '../components/TweetList/TweetList.jsx';
import { PagginationList } from '../components/PagginationList/PagginationList.jsx';
import { BackButton } from 'components/BackButton/BackButton.jsx';
import { saveLStorage, loadLStorage, fetchTweets } from 'utils/dataService.js';
import { FilterSelector } from 'components/FilterSelector/FilterSelector.jsx';

export const statusFilters = Object.freeze({
  all: 'ALL',
  follow: 'FOLLOW',
  following: 'FOLLOWING',
});
const FAV_LS_KEY = 'favorits';
let count = 3;

const Tweets = () => {
  const [currentPage, setPage] = useState(1);
  const [tweetsArr, setTweetsArr] = useState([]);
  const [tweetsDb, setTweetsDb] = useState([]);
  const [lastPage, setLastPage] = useState(1);
  const [tweetsToView, setTweetsToView] = useState([]);
  const [filter, setFilter] = useState(statusFilters.all);
  const [followedArr, setFollowedArr] = useState([]);

  // Initial fetching of tweets array
  useEffect(() => {
    const firstRun = async () => {
      const fetchArr = await fetchTweets();
      setTweetsArr([...fetchArr]);
      setTweetsDb([...fetchArr]);
      setFollowedArr([...loadLStorage(FAV_LS_KEY)]);
    };
    firstRun();
  }, []);

  // Update tweets to view array and last page of all tweets array
  useEffect(() => {
    setTweetsToView([
      ...tweetsDb.slice((currentPage - 1) * count, currentPage * count),
    ]);
    const lastP = Math.ceil(tweetsDb.length / count);
    setLastPage(lastP);
    if (currentPage > lastP && lastP > 0) {
      setPage(lastP);
    }
  }, [currentPage, tweetsDb]);

  useEffect(() => {
    if (filter === statusFilters.all) {
      setTweetsDb([...tweetsArr]);
      return;
    }
    if (filter === statusFilters.follow) {
      setTweetsDb(tweetsArr.filter(tweet => !followedArr.includes(tweet.id)));
      return;
    }
    setTweetsDb(tweetsArr.filter(tweet => followedArr.includes(tweet.id)));
  }, [filter, followedArr, tweetsArr]);

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
    saveLStorage(FAV_LS_KEY, updatedFA);
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
      <FilterSelector setFilter={setFilter} filter={filter} />
      {tweetsToView.length > 0 ? (
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
          <BackButton label="Back" />
        </>
      ) : (
        <p
          style={{
            textAlign: 'center',
          }}
        >
          ...Loading
        </p>
      )}
    </>
  );
};

export default Tweets;
