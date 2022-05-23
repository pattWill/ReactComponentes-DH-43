import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb'
import Footer from './Footer';
function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <LastMovieInDb />
                    <GenresInDb />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;