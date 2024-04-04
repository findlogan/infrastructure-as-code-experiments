pulumi config set os:auth_url http://DEVSTACK_IP/identity
pulumi config set os:user_domain_name Default
pulumi config set os:username admin
pulumi config set os:password secret
pulumi config set os:tenant_id YOUR_TENANT_ID
pulumi config set os:region RegionOne