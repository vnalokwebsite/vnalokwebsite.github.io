class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="rowm">
      <h1>Local Governments in India</h1>
    </div>
    <section id="title">
      <div class="container-fluid">
        <!-- Nav Bar -->
        <nav class="navbar navbar-expand-lg navbar-dark">
          <a class="navbar-brand" href="https://www.iipa.org.in/cms/public/management/13">V.N. Alok</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  History
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item disabled" id="disabledl">Panchayat</a>
                  <div class="dropdown-divider">
                  </div>
                  <a class="dropdown-item" href="Ancient_history.html">Ancient</a>
                  <a class="dropdown-item" href="Medieval_history.html">Medieval</a>
                  <a class="dropdown-item" href="Modern_history.html">Modern</a>
                  <div class="dropdown-divider" id="dropbarline">
                  </div>
                  <a class="dropdown-item" href="municipalities.html">Municipalities</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Publications
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="my_works.html">My Works</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Functions
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="Elevsch.html">Panchayats</a>
                  <a class="dropdown-item" href="twelsch.html">Municipalities</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Finances
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item"
                    href="https://fincomindia.nic.in/ShowContent.aspx?uid1=3&uid2=0&uid3=0&uid4=0">Union Commissions Reports</a>
                  <a class="dropdown-item" href="#">State Commissions Reports</a>
                    <a class="dropdown-item" href="https://link.springer.com/book/10.1007/978-981-16-2203-8">Fiscal Decentralization in India: An outcome Mapping of SFCs</a>
                </div>
              </li>
  
  
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Elections
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="election_introduction.html">Introduction</a>
                  <a class="dropdown-item" href="election_tables.html">Tables</a>
                </div>
              </li>
  
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Acts and Rules
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="constituional_provisions.html">Constitutional Provisons </a>
                  <a class="dropdown-item" href="statewiseacts_rules.html">State-wise Acts and Rules</a>
                </div>
              </li>
              <li>
                <a class="nav-link" href="media.html">Media</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
      `;
    }
  }
  
  customElements.define('header-component', Header);