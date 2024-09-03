import React, { Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import MainContent from '~/components/MainContent';
import api, { userApis } from '~/utils/api';
import { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';


// Lazy load CardItem
const CardItem = lazy(() => import('~/components/CardItem'));

function SearchResults() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const title = queryParams.get('title');

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchApi = async () => {
            const result = await api.get(userApis.getCoursesBySlug, {
                params: {
                    title,
                },
            });
            console.log(result.data);
            setSearchResult(result.data);
        };
        fetchApi();
    }, [title]);

    console.log(title);
    return (
        <MainContent title="Tìm kiếm" desc="Tìm kiếm các khoá học">
            <span>
                {searchResult.length} kết quả cho "{title}"
            </span>
            <div className="row">
                {searchResult &&
                    searchResult.length > 0 &&
                    searchResult.map((course, index) => (
                        <div className="col mt-5 col-lg-3 col-md-4 col-sm-6" key={index}>
                            {/* Use LazyLoad to handle component lazy loading in viewport */}
                            <LazyLoad height={200} offset={100}>
                                <Suspense fallback={<div>Loading...</div>}>
                                    <CardItem
                                        slug={course.slug}
                                        src={course?.image_url}
                                        title={course?.title}
                                        desc={course?.desc}
                                        price={course?.price}
                                        isFree={course?.is_free}
                                        name={course?.creator?.name}
                                        avatar={course?.creator?.avatar}
                                    />
                                </Suspense>
                            </LazyLoad>
                        </div>
                    ))}
            </div>
        </MainContent>
    );
}

export default SearchResults;
