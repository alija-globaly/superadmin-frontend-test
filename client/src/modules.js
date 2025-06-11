import AuthModule from "./modules/Auth/auth.module";
import TenantModule from "./modules/Tenant/tenant.module";
import PartnerDatabaseModule from "./modules/PartnerDatabase/partner.module";
import DashboardModule from "./modules/Dashboard/dashboard.module";
import TalentModule from "./modules/Talent/talent.module";
import TenantInvitationModule from "./modules/TenantInvitation/tenant-invitation.module";
import WebHookEvents from "./modules/WebhookEvents/webhookEvents.module";
import ImportEvents from "./modules/ImportEvents/importEvents.module";
import BlacklistDomainModule from "./modules/BlacklistDomains/blacklist-domains.module";
import FreemiumApplicationModule from "./modules/FreemiumApplication/freemium-application.module";
import SMSRequests from "./modules/SMSRequests/sms-requests.module";

const modules = [
  AuthModule,
  DashboardModule,
  TenantModule,
  TenantInvitationModule,
  PartnerDatabaseModule,
  TalentModule,
  WebHookEvents,
  ImportEvents,
  BlacklistDomainModule,
  FreemiumApplicationModule,
  SMSRequests
];

export default modules;
