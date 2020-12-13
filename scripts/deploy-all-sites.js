const fetch = require('isomorphic-fetch');
const { deploy } = require('../network/deploy');
const { API_BASE } = require('../constants');

async function main() {
  const response = await fetch(`${API_BASE}/sites`);
  const sites = await response.json();

  sites
    .filter(site => site.is_published)
    .forEach(async site => {
      await deploy({
        projectName: `site-id-${site.id}`,
        siteId: site.id,
        gaTrackingId: site.ga_tracking_id,
      });
    });
}

main();
