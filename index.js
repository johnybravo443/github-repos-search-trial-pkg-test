import { getRepos } from 'github-repos-search-trial-pkg'

getRepos().then((repositories) => console.log(repositories))