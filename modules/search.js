export class Search {
  constructor(view) {
    this.view = view;
    this.view.searchInput.addEventListener('keyup', this.debounce(this.searchRepos.bind(this), 500))
  }

  async searchRepos() {
    if (this.view.searchInput.value) {
      this.clearList();
    return await fetch(`https://api.github.com/search/repositories?q=${this.view.searchInput.value}&per_page=5`)
    .then(res => {
      if (res.ok) {
        res.json().then(res => {
          console.log(res);
          res.items.forEach(repoName => {
            this.view.searchedRepo(repoName)
          });
        })
      }
    })
    } else {
      this.clearList();
    }
  }

  debounce(fn, debounceTime) {
    let timeout;
    return function () {
        const fnCall = () => fn.apply(this, arguments);
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, debounceTime);
    }
  }

  clearList() {
    this.view.resultList.innerHTML = '';
  }
}