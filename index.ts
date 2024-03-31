import * as pulumi from "@pulumi/pulumi";
import * as os from "@pulumi/openstack";

let config = new pulumi.Config("os");
let provider = new os.Provider("openstack", {
    authUrl: config.require("auth_url"),
    userDomainName: config.require("user_domain_name"),
    userName: config.require("username"),
    password: config.requireSecret("password"),
    tenantId: config.require("tenant_id"),
    region: config.require("region")
});

const userData = `#cloud-config
packages:
  - nginx
`;

const instance = new os
    .compute
    .Instance("web-server", {
        flavorName: "m1.small",
        imageName: "cirros-0.6.2-x86_64-disk",
        networks: [
            {
                name: "private"
            }
        ],
        userData: Buffer
            .from(userData)
            .toString('base64')
    }, {provider});

export const instanceIP = instance.accessIpV4;
