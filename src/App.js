import React, {Component} from 'react';
import {DataSearch, ReactiveBase, ReactiveList, ResultList, SelectedFilters} from '@appbaseio/reactivesearch';
import './App.css';
import './Bimilist.css';

const { ResultListWrapper } = ReactiveList;

class App extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="top-header">
                    <h1>Bimi<span style={{fontSize:18}}>(美味)</span>list</h1>
                    <p className="header-second">by Norihito Yamamoto</p>
                </div>
                <div className="top-comment">
                    * 評点はあくまでNorihito Yamamoto個人の感想です。
                </div>
                <ReactiveBase
                    app="bimilist"
                    url="https://search-bimilist-gzvyhtn4npysg26ckofr6fnjse.ap-northeast-1.es.amazonaws.com"
                    theme={{
                        typography: {
                            fontFamily: 'sans-serif',
                            fontSize: '16px',
                        },
                        colors: {
                            titleColor: '#001858',
                            textColor: '#172c66',
                            backgroundColor: '#f9f4ef',
                            primaryColor: '#f25042',
                        }
                    }}
                >
                    <div className = "search-window">
                        <DataSearch
                            componentId="area"
                            dataField={["bimi_area"]}
                            queryFormat="and"
                            placeholder = "エリアの指定"
                            showIcon = { false }
                            title = "エリア"
                            className = "data-search"
                            innerClass = {{
                                input: 'input',
                                list: 'list',
                            }}
                        />
                        <DataSearch
                            componentId="genre"
                            dataField={["bimi_genre"]}
                            queryFormat="and"
                            placeholder = "ジャンルの指定"
                            showIcon = { false }
                            title = "ジャンル"
                            className = "data-search"
                            innerClass = {{
                                input: 'input',
                                list: 'list',
                            }}
                        />
                    </div>
                    <SelectedFilters/>
                    <ReactiveList
                        componentId="resultLists"
                        dataField="bimi_restaurant_name"
                        size={10}
                        pagination={true}
                        react={{
                            "and": ["area", "genre"]
                        }}
                        sortOptions={[
                            {label:"評点", dataField:"bimi_score", sortBy:"desc"},
                        ]}
                        className="result-list"
                            innerClass={{
                                resultsInfo: "resultsInfo",
                                resultStats: "resultStats",
                                pagination: "pagination"
                            }}
                    >
                        {({data}) => (
                            <ResultListWrapper>
                                {
                                    data.map(item => (
                                        <ResultList
                                            key={item.bimi_restaurant_name}
                                            href={item.bimi_tabelog_link}
                                            className="listItem"
                                        >
                                            <ResultList.Content>
                                                <ResultList.Title
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.bimi_restaurant_name
                                                    }}
                                                />
                                                <ResultList.Description className="description">
                                                    <div className="listcolumn1">
                                                        <p className="genre">{item.bimi_genre}</p>
                                                        <p className="area">{item.bimi_area}</p>
                                                        <p className="usecase">{item.bimi_case}</p>
                                                        <p className="score">{item.bimi_score}</p>
                                                    </div>
                                                    <div className="listcolumn2">
                                                        <p className="comment">{item.bimi_comment}</p>
                                                    </div>
                                                </ResultList.Description>
                                            </ResultList.Content>
                                        </ResultList>
                                    ))
                                }
                            </ResultListWrapper>
                        )}
                    </ReactiveList>
                </ReactiveBase>
            </div>
        );
    }
}

export default App;
