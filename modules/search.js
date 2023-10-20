export class Search {
  constructor(view, api) {
    this.view = view;
    this.api = api;
    this.view.searchInput.addEventListener('keyup', this.debounce(this.searchRepos.bind(this), 500))
  }

  searchRepos() {
    if (this.view.searchInput.value) {
      this.clearList();
      this.repoRequest()
    } else {
      this.clearList();
    }
  }

  async repoRequest() {
    try {
      await this.api.loadRepos(this.view.searchInput.value).then(res => {
        if (res.ok) {
          res.json().then(res => {
            console.log(res);
            res.items.forEach(repoName => {
              this.view.searchedRepo(repoName)
            });
          })
        }
      })
    } catch(err) {
        console.log('Error: ' + err)
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