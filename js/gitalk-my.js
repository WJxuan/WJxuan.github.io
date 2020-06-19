

function lablegen(hook) {
    hook.doneEach(function () {
        gitalk = new Gitalk({
            clientID: '7c52dc2fd10614e356b9',
            clientSecret: '2dcf81f17bfdc8a03a84b6deff05ba79459c7c46',
            repo: 'WJxuan.github.io',
            owner: 'WJxuan',
            admin: ['WJxuan'],
            id: hex_md5(window.location.pathname + window.location.hash.split('?')[0]),
            distractionFreeMode: true
        });
        // console.log(gitalk.id) 
        // console.log(gitalk)
        console.log("new gitalk")
    });
}
//
$docsify.plugins = [].concat(lablegen, $docsify.plugins);