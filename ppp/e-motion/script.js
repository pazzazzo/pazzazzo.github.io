moment.locale('fr');
let lastFetch
if (localStorage.getItem('lastFetch')) {
    lastFetch = new Date(localStorage.getItem('lastFetch'));
} else {
    localStorage.setItem('lastFetch', new Date().toISOString());
    lastFetch = new Date(localStorage.getItem('lastFetch'));
}
const now = new Date();
const diff = now - lastFetch;
const diffInMinutes = Math.floor(diff / 1000 / 60);

if (localStorage.getItem('commit-date')) {
    document.getElementById('commit-date').textContent = moment(localStorage.getItem('commit-date')).fromNow();
}

if (diffInMinutes >= 1) {
    localStorage.setItem('lastFetch', new Date().toISOString());
    try {
        fetch('https://api.github.com/repos/pazzazzo/E-Motion/commits?per_page=1').then(async res => {
            if (!res.ok) throw new Error(res);
            const commits = await res.json();
            if (!commits.length) {
                console.log('Aucun commit trouvé.');
                return;
            }

            // On lit la date dans le premier élément
            const isoDate = commits[0].commit.author.date;
            localStorage.setItem('commit-date', isoDate);
            document.getElementById('commit-date').textContent = moment(isoDate).fromNow()
        })
    } catch (err) {
        console.error(err);
    }
}