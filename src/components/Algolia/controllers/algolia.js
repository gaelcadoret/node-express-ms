// https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/how-to/importing-with-the-api/
import { SearchClient } from "instantsearch.js";
import algoliasearch from 'algoliasearch';

// const client = algoliasearch('LEJMHJR3G9', 'ef02d7a9fc7fa3faca19f6b6c0784541');
// const index = client.initIndex('prod_sponsor_annonces');

const search = instantsearch({
    indexName: 'instant_search',
    searchClient: algoliasearch(
        'LEJMHJR3G9',
        'ef02d7a9fc7fa3faca19f6b6c0784541'
    ),
});

const searchBox = instantsearch.widgets.searchBox({
    // ...
});

search.addWidgets([searchBox])

search.start();
