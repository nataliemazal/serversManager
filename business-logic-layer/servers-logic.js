const dal = require("../data-access-layer/dal");

async function getAllPServersAsync() {
  const sql =
   `SELECT server_id , server_name , ip, hosting_companies.hosting_name,status,DATE_FORMAT(created_date ,'%d/%m/%Y %H:%i') AS created_date
    FROM servers JOIN hosting_companies
    ON servers.hosting_compny = hosting_companies.hosting_id
    ;`;
  const servers = await dal.executeAsync(sql);
  return servers;
}

async function getServersSortByDateAsync() {
  const sql =
   `SELECT server_id , server_name , ip, hosting_companies.hosting_name,status, DATE_FORMAT(created_date ,'%d/%m/%Y %H:%i') AS created_date
    FROM servers JOIN hosting_companies
    ON servers.hosting_compny = hosting_companies.hosting_id
    ORDER BY created_date desc
    ;`;
  const servers = await dal.executeAsync(sql);
  return servers;
}


async function changeStatusAsync(server) {
  console.log(server)
  const sql = `UPDATE servers SET status = ${server.status} WHERE server_id = ${server.server_id}`;
  const updtedServer = await dal.executeAsync(sql);
  console.log(updtedServer)
  return server;
}

module.exports = {
  getAllPServersAsync,
  changeStatusAsync,
  getServersSortByDateAsync
};
