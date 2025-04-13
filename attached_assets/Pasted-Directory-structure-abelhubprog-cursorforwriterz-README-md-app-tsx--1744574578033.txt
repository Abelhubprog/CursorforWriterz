Directory structure:
└── abelhubprog-cursorforwriterz/
    ├── README.md
    ├── app.tsx
    ├── basic_policy.sql
    ├── case_sensitive_check.sql
    ├── check_schema.js
    ├── check_table_structure.sql
    ├── complete_setup.sql
    ├── config.js
    ├── create_admin_users_table.sql
    ├── create_assignments_bucket.sql
    ├── create_conversations_table.sql
    ├── create_messages_only.sql
    ├── create_messages_table.sql
    ├── create_orders_and_admin_tables.sql
    ├── deployment-guide.md
    ├── DEPLOYMENT.md
    ├── DOCS.md
    ├── drop_and_recreate.sql
    ├── env-test.js
    ├── eslint.config.js
    ├── find_real_user.sql
    ├── fix_admin_function.sql
    ├── fix_supabase_tables.sql
    ├── fix_views_table.sql
    ├── implementation-summary.md
    ├── index.html
    ├── install-supabase-cli.bat
    ├── install-supabase-cli.ps1
    ├── install-supabase-cli.sh
    ├── install.ps1
    ├── jest.config.js
    ├── jest.setup.js
    ├── package.json
    ├── pnpm-lock.yaml
    ├── pnpm-lock.yaml.1164159662
    ├── postcss.config.js
    ├── recreate_messages_table.sql
    ├── reset_messages_policies.sql
    ├── schema.txt
    ├── setup-turnitin-infrastructure.bat
    ├── setup-turnitin-infrastructure.ps1
    ├── setup-turnitin-infrastructure.sh
    ├── SETUP.md
    ├── setup_supabase_tables.sql
    ├── simplified_messages.sql
    ├── simplified_policies.sql
    ├── step_by_step_messages.sql
    ├── supabase-fix-plan.md
    ├── SUPABASE-SETUP.md
    ├── tailwind.config.js
    ├── test_connection.js
    ├── test_pg.js
    ├── test_supabase.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── tsconfig.vercel.json
    ├── TURNITIN-SETUP-README.md
    ├── update_admin_function.sql
    ├── update_config.sql
    ├── updated_messages_table.sql
    ├── vercel-build.sh
    ├── vercel-deploy.ps1
    ├── vercel-deploy.sh
    ├── vercel.json
    ├── verify-deployment.js
    ├── vite.config.ts
    ├── wake_db.js
    ├── .env.development
    ├── .env.example
    ├── .env.production
    ├── .eslintrc.cjs
    ├── .eslintrc.jsonc
    ├── .npmrc
    ├── .vercelignore
    ├── .windsurfrules
    ├── docs/
    │   └── ADMIN_SERVICE_PAGES.md
    ├── migrations/
    │   ├── 01_supabase_auth.sql
    │   ├── 02_create_admin.sql
    │   ├── 03_add_status_to_views.sql
    │   ├── 03_fix_views_table.sql
    │   └── create_admin_tables.sql
    ├── public/
    │   ├── _redirects
    │   └── index.html
    ├── scripts/
    │   ├── README.md
    │   ├── add-admin-sql.js
    │   ├── add-admin.js
    │   ├── add-admin.sql
    │   ├── add-existing-user-as-admin.sql
    │   ├── apply-migrations.js
    │   ├── check-admin-status.sql
    │   ├── check-auth-config.sql
    │   ├── check-build.js
    │   ├── check-db-connection.js
    │   ├── check_sql_files.js
    │   ├── create-admin-from-scratch.sql
    │   ├── create-admin.js
    │   ├── create-db-helper-functions.sql
    │   ├── create-first-admin.sql
    │   ├── create-profiles-and-reset-admin.sql
    │   ├── create-secure-admin.sql
    │   ├── create-working-admin.sql
    │   ├── createAdmin.cjs
    │   ├── deploy-vercel.js
    │   ├── deploy.js
    │   ├── disable-email-confirmation.sql
    │   ├── ensure-build.js
    │   ├── ensure-env.js
    │   ├── fix-admin-users.sql
    │   ├── fix-admin.js
    │   ├── fix-uuid-bigint.js
    │   ├── fix-views-table.js
    │   ├── fix_sql_files.js
    │   ├── fix_status_column.js
    │   ├── generate-fallback-data.js
    │   ├── generate-migration-sql.js
    │   ├── generate-og-image.js
    │   ├── make-handywriterz-admin.sql
    │   ├── og-image-fallback.js
    │   ├── package.json
    │   ├── pnpm-lock.yaml
    │   ├── quick-admin-setup.js
    │   ├── reset-admin-password.sql
    │   ├── reset-database.js
    │   ├── reset-supabase.ps1
    │   ├── reset-supabase.sh
    │   ├── run-migrations.js
    │   ├── setup-admin.js
    │   ├── setup_db.js
    │   ├── SQL_README.md
    │   ├── test-db-auth.js
    │   ├── vercel-build-override.js
    │   ├── vercel-build.js
    │   ├── vercel-prepare.js
    │   └── verify-admin-login.sql
    ├── src/
    │   ├── App.tsx
    │   ├── env.ts
    │   ├── index.css
    │   ├── index.d.ts
    │   ├── main.tsx
    │   ├── middleware.ts
    │   ├── polyfills.ts
    │   ├── providers.tsx
    │   ├── router.tsx
    │   ├── vite-env.d.ts
    │   ├── vite.config.ts
    │   ├── admin/
    │   │   ├── Admin.tsx
    │   │   ├── Routes.tsx
    │   │   ├── settings.tsx
    │   │   ├── components/
    │   │   │   ├── ErrorBoundary.tsx
    │   │   │   ├── ProtectedRoute.tsx
    │   │   │   ├── hooks/
    │   │   │   │   └── useAuth.tsx
    │   │   │   ├── layout/
    │   │   │   │   ├── AdminLayout.tsx
    │   │   │   │   └── Sidebar.tsx
    │   │   │   └── navigation/
    │   │   │       ├── Sidebar.tsx
    │   │   │       └── TopBar.tsx
    │   │   ├── layouts/
    │   │   │   └── AdminLayout.tsx
    │   │   ├── pages/
    │   │   │   ├── Analytics.tsx
    │   │   │   ├── Dashboard.tsx
    │   │   │   ├── DebugRedirect.tsx
    │   │   │   ├── SimpleDashboard.tsx
    │   │   │   ├── auth/
    │   │   │   │   └── Unauthorized.tsx
    │   │   │   ├── content/
    │   │   │   │   ├── Categories.tsx
    │   │   │   │   ├── ContentEditor.tsx
    │   │   │   │   ├── ContentList.tsx
    │   │   │   │   └── ServiceEditor.tsx
    │   │   │   └── users/
    │   │   │       ├── UserEditor.tsx
    │   │   │       └── UsersList.tsx
    │   │   └── routes/
    │   │       └── index.tsx
    │   ├── api/
    │   │   ├── createCharge.ts
    │   │   ├── admin/
    │   │   │   └── profile.js
    │   │   ├── controllers/
    │   │   │   └── PostController.ts
    │   │   ├── middleware/
    │   │   │   └── auth.ts
    │   │   └── routes/
    │   │       ├── index.ts
    │   │       └── postRoutes.ts
    │   ├── components/
    │   │   ├── CommentSection.tsx
    │   │   ├── HandyWriterzLogo.tsx
    │   │   ├── Navbar.tsx
    │   │   ├── admin/
    │   │   │   ├── MediaLibrary.tsx
    │   │   │   ├── MessagesManager.tsx
    │   │   │   ├── PostEditor.tsx
    │   │   │   ├── PostRenderer.tsx
    │   │   │   ├── PostsList.tsx
    │   │   │   ├── RichTextEditor.tsx
    │   │   │   ├── content/
    │   │   │   │   ├── ContentEditor.tsx
    │   │   │   │   └── ContentManagement.tsx
    │   │   │   ├── dashboard/
    │   │   │   │   ├── RecentComments.tsx
    │   │   │   │   ├── RecentPosts.tsx
    │   │   │   │   ├── StatCard.tsx
    │   │   │   │   ├── Stats.tsx
    │   │   │   │   └── editor/
    │   │   │   │       ├── ContentRenderer.tsx
    │   │   │   │       └── RichContentEditor.tsx
    │   │   │   ├── editor/
    │   │   │   │   ├── PostEditor.tsx
    │   │   │   │   └── RichTextEditor.tsx
    │   │   │   ├── layout/
    │   │   │   │   ├── AdminLayout.tsx
    │   │   │   │   ├── DashboardLayout.tsx
    │   │   │   │   ├── Sidebar.tsx
    │   │   │   │   ├── TopNav.tsx
    │   │   │   │   └── UserMenu.tsx
    │   │   │   └── navigation/
    │   │   │       └── AdminNav.tsx
    │   │   ├── auth/
    │   │   │   ├── AdminGuard.tsx
    │   │   │   ├── AdminProtectedRoute.tsx
    │   │   │   ├── AdminRoute.tsx
    │   │   │   ├── AuthGuard.tsx
    │   │   │   ├── AuthMiddleware.tsx
    │   │   │   ├── AuthModal.tsx
    │   │   │   ├── ClerkProvider.tsx
    │   │   │   └── ProtectedRoute.tsx
    │   │   ├── Comments/
    │   │   │   └── CommentSection.tsx
    │   │   ├── common/
    │   │   │   ├── Button.tsx
    │   │   │   ├── ErrorBoundary.tsx
    │   │   │   ├── Loader.tsx
    │   │   │   ├── LoadingState.tsx
    │   │   │   ├── Pagination.test.tsx
    │   │   │   └── Pagination.tsx
    │   │   ├── contents/
    │   │   │   ├── ContentManager.tsx
    │   │   │   └── PublicContent.tsx
    │   │   ├── Dashboard/
    │   │   │   ├── Dashboard.tsx
    │   │   │   ├── DashboardWrapper.tsx
    │   │   │   ├── DocumentUploader.tsx
    │   │   │   ├── SendToAdminButton.tsx
    │   │   │   └── SideNav.tsx
    │   │   ├── Documents/
    │   │   │   └── DocumentManager.tsx
    │   │   ├── Editor/
    │   │   │   ├── RichTextEditor.test.tsx
    │   │   │   └── RichTextEditor.tsx
    │   │   ├── examples/
    │   │   │   └── FormExample.tsx
    │   │   ├── interactions/
    │   │   │   ├── Comments.tsx
    │   │   │   └── Likes.tsx
    │   │   ├── layout/
    │   │   │   └── Navbar.tsx
    │   │   ├── layouts/
    │   │   │   ├── AdminLayout.tsx
    │   │   │   ├── Breadcrumbs.tsx
    │   │   │   ├── DashboardLayout.tsx
    │   │   │   ├── Footer.tsx
    │   │   │   ├── Header.tsx
    │   │   │   ├── Navbar.tsx
    │   │   │   ├── RootLayout.tsx
    │   │   │   └── ServiceLayout.tsx
    │   │   ├── Messages/
    │   │   │   └── MessageCenter.tsx
    │   │   ├── navigation/
    │   │   │   ├── Navbar.tsx
    │   │   │   └── Navigation.tsx
    │   │   ├── Payments/
    │   │   │   └── PaymentProcessor.tsx
    │   │   ├── services/
    │   │   │   ├── BlogPostDetail.tsx
    │   │   │   ├── BlogPostsList.tsx
    │   │   │   ├── OrderFlow.tsx
    │   │   │   ├── ServiceHeader.tsx
    │   │   │   ├── ServiceHero.tsx
    │   │   │   ├── ServiceOverview.tsx
    │   │   │   ├── ServicePageTemplate.tsx
    │   │   │   └── StandardServicePage.tsx
    │   │   ├── shared/
    │   │   │   ├── Chat.tsx
    │   │   │   ├── NotificationCenter.tsx
    │   │   │   └── TurnitinUpload.tsx
    │   │   ├── skeletons/
    │   │   │   ├── ContentSkeleton.tsx
    │   │   │   └── TableSkeleton.tsx
    │   │   ├── test/
    │   │   │   └── SystemTest.tsx
    │   │   ├── transitions/
    │   │   │   └── PageTransition.tsx
    │   │   └── ui/
    │   │       ├── README.md
    │   │       ├── access-denied.tsx
    │   │       ├── AccessibleButton.tsx
    │   │       ├── AccessibleToggleButton.tsx
    │   │       ├── alert.tsx
    │   │       ├── animated.tsx
    │   │       ├── avatar-upload.tsx
    │   │       ├── avatar.tsx
    │   │       ├── badge.tsx
    │   │       ├── button.tsx
    │   │       ├── card.tsx
    │   │       ├── CategoryCard.vue
    │   │       ├── checkbox.tsx
    │   │       ├── DatabaseErrorMessage.tsx
    │   │       ├── DataSourceIndicator.tsx
    │   │       ├── DataTable.tsx
    │   │       ├── dialog.tsx
    │   │       ├── document-upload.tsx
    │   │       ├── DocumentProcessingStatus.tsx
    │   │       ├── DocumentUploadForm.tsx
    │   │       ├── dropdown-menu.tsx
    │   │       ├── EmailInterface.tsx
    │   │       ├── ErrorFallback.tsx
    │   │       ├── ErrorState.tsx
    │   │       ├── fieldset.tsx
    │   │       ├── form-field.tsx
    │   │       ├── form.tsx
    │   │       ├── FormField.tsx
    │   │       ├── FormLayout.tsx
    │   │       ├── IconButton.tsx
    │   │       ├── icons.tsx
    │   │       ├── image-upload.tsx
    │   │       ├── index.ts
    │   │       ├── input.tsx
    │   │       ├── label.tsx
    │   │       ├── Loader.tsx
    │   │       ├── LoadingScreen.tsx
    │   │       ├── LoadingSpinner.tsx
    │   │       ├── LoadingState.tsx
    │   │       ├── MessagingInterface.tsx
    │   │       ├── NotificationSystem.tsx
    │   │       ├── PageTitle.tsx
    │   │       ├── PaymentButton.tsx
    │   │       ├── progress.tsx
    │   │       ├── radio-group.tsx
    │   │       ├── RoleBadge.tsx
    │   │       ├── scroll-area.tsx
    │   │       ├── SearchBar.vue
    │   │       ├── select.tsx
    │   │       ├── separator.tsx
    │   │       ├── share-dialog.tsx
    │   │       ├── skeleton.tsx
    │   │       ├── spinner.tsx
    │   │       ├── StatusBadge.tsx
    │   │       ├── switch.tsx
    │   │       ├── tabs.tsx
    │   │       ├── textarea.tsx
    │   │       ├── ThemeToggle.tsx
    │   │       ├── ThemeTransition.tsx
    │   │       ├── toast.tsx
    │   │       ├── toaster.tsx
    │   │       ├── types.ts
    │   │       ├── use-toast.ts
    │   │       ├── use-toast.tsx
    │   │       ├── UserProfile.tsx
    │   │       └── toast/
    │   │           ├── index.tsx
    │   │           ├── toaster.tsx
    │   │           └── use-toast.ts
    │   ├── config/
    │   │   ├── clerk.ts
    │   │   ├── deployment.ts
    │   │   ├── dev-flags.ts
    │   │   ├── production.ts
    │   │   ├── services.ts
    │   │   ├── telegram.ts
    │   │   └── config/
    │   │       ├── services.ts
    │   │       └── telegram.ts
    │   ├── context/
    │   │   ├── AuthContext.tsx
    │   │   └── SupabaseContext.tsx
    │   ├── contexts/
    │   │   ├── AdminLayoutContext.tsx
    │   │   ├── AuthContext.tsx
    │   │   └── DatabaseConnectionContext.tsx
    │   ├── cron/
    │   │   ├── cleanupJob.ts
    │   │   └── telegramRetryJob.ts
    │   ├── db/
    │   │   ├── schema.sql
    │   │   └── schema.ts
    │   ├── fallbacks/
    │   │   ├── README.md
    │   │   ├── all_posts.json
    │   │   ├── posts_adult-health-nursing.json
    │   │   ├── posts_ai.json
    │   │   ├── posts_child-nursing.json
    │   │   ├── posts_crypto.json
    │   │   ├── posts_mental-health-nursing.json
    │   │   ├── posts_social-work.json
    │   │   ├── posts_special-education.json
    │   │   └── profiles.json
    │   ├── hooks/
    │   │   ├── useAdmin.ts
    │   │   ├── useAdminAuth.tsx
    │   │   ├── useAnalytics.ts
    │   │   ├── useAuth.ts
    │   │   ├── useAuth.tsx
    │   │   ├── useAuthGuard.ts
    │   │   ├── useAuthRedirect.ts
    │   │   ├── useBilling.ts
    │   │   ├── useCommentQueries.ts
    │   │   ├── useDatabase.ts
    │   │   ├── useDatabaseQuery.ts
    │   │   ├── useDocumentSubmission.ts
    │   │   ├── useField.ts
    │   │   ├── useHomeData.ts
    │   │   ├── useInteractions.ts
    │   │   ├── useIsAdmin.tsx
    │   │   ├── useLocalStorage.ts
    │   │   ├── useNotifications.ts
    │   │   ├── usePostQueries.ts
    │   │   ├── useRedirectIfNotAuthenticated.ts
    │   │   ├── useServices.ts
    │   │   ├── useSupabase.ts
    │   │   ├── useSupabaseClient.ts
    │   │   ├── useSupabaseClient.tsx
    │   │   └── useTheme.ts
    │   ├── layouts/
    │   │   └── AdminLayout.tsx
    │   ├── lib/
    │   │   ├── checkEnv.ts
    │   │   ├── clerk.ts
    │   │   ├── clerkClient.ts
    │   │   ├── contentService.ts
    │   │   ├── corsCheck.ts
    │   │   ├── env.ts
    │   │   ├── fallbackLoader.ts
    │   │   ├── fileUploadService.ts
    │   │   ├── firebase.ts
    │   │   ├── form-validation.ts
    │   │   ├── initDatabase.ts
    │   │   ├── logger.ts
    │   │   ├── prisma.ts
    │   │   ├── rateLimit.ts
    │   │   ├── storage.ts
    │   │   ├── supabase.ts
    │   │   ├── supabaseClient.ts
    │   │   ├── supabaseDiagnostics.ts
    │   │   ├── telegram.ts
    │   │   ├── utils.ts
    │   │   ├── validation.ts
    │   │   ├── migrations/
    │   │   │   ├── 001_initial_schema.sql
    │   │   │   └── 002_seed_services.sql
    │   │   ├── services/
    │   │   │   └── supabase.ts
    │   │   └── telegram/
    │   │       └── index.ts
    │   ├── models/
    │   │   ├── Post.ts
    │   │   └── User.ts
    │   ├── pages/
    │   │   ├── About.tsx
    │   │   ├── Blog.tsx
    │   │   ├── Contact.tsx
    │   │   ├── Diagnostics.tsx
    │   │   ├── FAQ.tsx
    │   │   ├── Homepage.tsx
    │   │   ├── HowItWorks.tsx
    │   │   ├── learning-hub.tsx
    │   │   ├── LearningHub.tsx
    │   │   ├── not-found.tsx
    │   │   ├── Payment.tsx
    │   │   ├── Pricing.tsx
    │   │   ├── Privacy.tsx
    │   │   ├── ServicePage.tsx
    │   │   ├── Services.tsx
    │   │   ├── Support.tsx
    │   │   ├── Terms.tsx
    │   │   ├── Unauthorized.tsx
    │   │   ├── admin/
    │   │   │   ├── README.md
    │   │   │   ├── AdminDashboard.tsx
    │   │   │   ├── AdminRoutes.tsx
    │   │   │   ├── Analytics.tsx
    │   │   │   ├── Categories.tsx
    │   │   │   ├── Comments.tsx
    │   │   │   ├── Content.tsx
    │   │   │   ├── ContentManager.tsx
    │   │   │   ├── DashboardRoutes.tsx
    │   │   │   ├── database-demo.tsx
    │   │   │   ├── Diagnostics.tsx
    │   │   │   ├── index.tsx
    │   │   │   ├── login.tsx
    │   │   │   ├── MediaLibrary.tsx
    │   │   │   ├── newAdminDashboard.tsx
    │   │   │   ├── Orders.tsx
    │   │   │   ├── payments.tsx
    │   │   │   ├── PostEditor.tsx
    │   │   │   ├── Posts.tsx
    │   │   │   ├── Services.tsx
    │   │   │   ├── system-metrics.tsx
    │   │   │   ├── Tags.tsx
    │   │   │   ├── telegram-dashboard.tsx
    │   │   │   ├── upload-demo.tsx
    │   │   │   ├── users.tsx
    │   │   │   ├── analytics/
    │   │   │   │   └── AnalyticsDashboard.tsx
    │   │   │   ├── content/
    │   │   │   │   ├── CategoriesList.tsx
    │   │   │   │   ├── ContentEditor.tsx
    │   │   │   │   ├── ContentList.tsx
    │   │   │   │   ├── PostEditor.test.tsx
    │   │   │   │   ├── PostEditor.tsx
    │   │   │   │   ├── PostsList.test.tsx
    │   │   │   │   └── PostsList.tsx
    │   │   │   ├── services/
    │   │   │   │   ├── index.tsx
    │   │   │   │   ├── ServiceManager.tsx
    │   │   │   │   ├── ServicePageEditor.tsx
    │   │   │   │   ├── ServicePagesManager.tsx
    │   │   │   │   └── ServicesList.tsx
    │   │   │   └── users/
    │   │   │       └── UserManagement.tsx
    │   │   ├── api/
    │   │   │   ├── check-ai-score.ts
    │   │   │   ├── check-payment-status.ts
    │   │   │   ├── check-score-status.ts
    │   │   │   ├── check-turnitin.ts
    │   │   │   ├── create-charge.ts
    │   │   │   ├── create-turnitin-payment.ts
    │   │   │   ├── send-document.ts
    │   │   │   ├── services.ts
    │   │   │   ├── upload.ts
    │   │   │   ├── admin/
    │   │   │   │   ├── stats.ts
    │   │   │   │   ├── system-config.ts
    │   │   │   │   ├── system-metrics.ts
    │   │   │   │   ├── payments/
    │   │   │   │   │   └── index.ts
    │   │   │   │   ├── telegram-requests/
    │   │   │   │   │   ├── index.ts
    │   │   │   │   │   └── [id]/
    │   │   │   │   │       ├── index.ts
    │   │   │   │   │       └── retry.ts
    │   │   │   │   └── users/
    │   │   │   │       └── index.ts
    │   │   │   ├── check-charge/
    │   │   │   │   └── [id].ts
    │   │   │   ├── documents/
    │   │   │   │   └── upload.ts
    │   │   │   ├── emails/
    │   │   │   │   ├── index.ts
    │   │   │   │   ├── send.ts
    │   │   │   │   └── [id]/
    │   │   │   │       └── index.ts
    │   │   │   ├── messages/
    │   │   │   │   └── index.ts
    │   │   │   ├── notifications/
    │   │   │   │   └── index.ts
    │   │   │   ├── telegram/
    │   │   │   │   └── webhook.ts
    │   │   │   ├── users/
    │   │   │   │   ├── [id].ts
    │   │   │   │   └── [userId]/
    │   │   │   │       └── role.ts
    │   │   │   └── webhooks/
    │   │   │       └── coinbase.ts
    │   │   ├── auth/
    │   │   │   ├── admin-login.tsx
    │   │   │   ├── check-email.tsx
    │   │   │   ├── ForgotPassword.tsx
    │   │   │   ├── login.tsx
    │   │   │   ├── mfa-challenge.tsx
    │   │   │   ├── reset-password.tsx
    │   │   │   └── SignUp.tsx
    │   │   ├── dashboard/
    │   │   │   ├── DocumentsUpload.tsx
    │   │   │   ├── Messages.tsx
    │   │   │   ├── Orders.jsx
    │   │   │   ├── Orders.tsx
    │   │   │   ├── Profile.tsx
    │   │   │   └── Settings.tsx
    │   │   ├── learningHub/
    │   │   │   └── index.tsx
    │   │   ├── profile/
    │   │   │   └── profile.tsx
    │   │   ├── services/
    │   │   │   ├── adult-health-nursing.tsx
    │   │   │   ├── advanced-practice-nursing.tsx
    │   │   │   ├── ai.tsx
    │   │   │   ├── BlogPostPage.tsx
    │   │   │   ├── child-nursing.tsx
    │   │   │   ├── crypto.tsx
    │   │   │   ├── DeepResearch.tsx
    │   │   │   ├── index.tsx
    │   │   │   ├── mental-health-nursing.tsx
    │   │   │   ├── newServiceBlogTemplate.tsx
    │   │   │   ├── newServicepage.tsx
    │   │   │   ├── ServicePage.tsx
    │   │   │   ├── social-work.tsx
    │   │   │   └── special-education.tsx
    │   │   ├── tools/
    │   │   │   └── check-turnitin.tsx
    │   │   └── user/
    │   │       └── Profile.tsx
    │   ├── providers/
    │   │   ├── AuthProvider.tsx
    │   │   ├── clerk-provider.tsx
    │   │   ├── ClerkProvider.tsx
    │   │   ├── QueryProvider.tsx
    │   │   ├── ServicesProvider.tsx
    │   │   └── SupabaseProvider.tsx
    │   ├── routes/
    │   │   ├── admin.tsx
    │   │   ├── AdminDashboardRoutes.tsx
    │   │   ├── AdminProtectedRoute.tsx
    │   │   ├── AdminRoutes.tsx
    │   │   ├── AdminServicePagesRoutes.tsx
    │   │   ├── AppRoutes.tsx
    │   │   ├── pages.tsx
    │   │   └── services.tsx
    │   ├── scripts/
    │   │   ├── create_document_submissions_tables.sql
    │   │   ├── createAdmin.ts
    │   │   ├── createAdminUser.ts
    │   │   ├── fixDatabase.ts
    │   │   ├── initSupabase.js
    │   │   ├── initSupabase.ts
    │   │   ├── setupDBCli.js
    │   │   └── universal-admin-fix.js
    │   ├── services/
    │   │   ├── adminAuth.ts
    │   │   ├── adminAuthFix.ts
    │   │   ├── adminAuthService.ts
    │   │   ├── adminNotificationService.ts
    │   │   ├── adminService.ts
    │   │   ├── aiScoreChecker.ts
    │   │   ├── analyticsService.ts
    │   │   ├── authAdapter.ts
    │   │   ├── authService.ts
    │   │   ├── blogService.ts
    │   │   ├── commentService.ts
    │   │   ├── commerce.ts
    │   │   ├── contentService.ts
    │   │   ├── database.ts
    │   │   ├── databaseService.ts
    │   │   ├── documentCleanup.ts
    │   │   ├── documentProcessor.ts
    │   │   ├── documentQueueService.ts
    │   │   ├── documentSubmissionService.ts
    │   │   ├── fileSanitizer.ts
    │   │   ├── fileUploadService.ts
    │   │   ├── functions.ts
    │   │   ├── interactionsService.ts
    │   │   ├── notificationService.ts
    │   │   ├── paymentService.ts
    │   │   ├── paymentVerification.ts
    │   │   ├── reactionService.ts
    │   │   ├── receiptService.ts
    │   │   ├── researchService.ts
    │   │   ├── storage.ts
    │   │   ├── storageService.ts
    │   │   ├── supabaseService.ts
    │   │   ├── telegramBotInteractionService.ts
    │   │   ├── telegramBotService.ts
    │   │   ├── telegramRetryService.ts
    │   │   ├── userService.ts
    │   │   ├── __tests__/
    │   │   │   ├── telegramBotService.test.ts
    │   │   │   └── telegramRetryService.test.ts
    │   │   └── supabase/
    │   │       ├── analytics.service.ts
    │   │       └── content.service.ts
    │   ├── styles/
    │   │   ├── animations.css
    │   │   └── onchainkit.css
    │   ├── tests/
    │   │   └── authTest.ts
    │   ├── theme/
    │   │   ├── index.ts
    │   │   ├── ThemeContext.tsx
    │   │   ├── themes.ts
    │   │   └── transitions.ts
    │   ├── types/
    │   │   ├── admin.ts
    │   │   ├── appkit.d.ts
    │   │   ├── auth.ts
    │   │   ├── auth.types.ts
    │   │   ├── blog.ts
    │   │   ├── clerk.ts
    │   │   ├── content.ts
    │   │   ├── database.ts
    │   │   ├── database.types.ts
    │   │   ├── databaseTypes.ts
    │   │   ├── env.d.ts
    │   │   ├── post.ts
    │   │   ├── posts.ts
    │   │   ├── reown-appkit.d.ts
    │   │   ├── sections.ts
    │   │   ├── service.ts
    │   │   ├── services.ts
    │   │   ├── supabase.ts
    │   │   └── user.ts
    │   └── utils/
    │       ├── cn.ts
    │       ├── dynamicImportErrorHandler.tsx
    │       ├── error.ts
    │       ├── errorRecovery.ts
    │       ├── errorTracking.ts
    │       ├── formatDate.ts
    │       ├── formatters.ts
    │       ├── index.ts
    │       └── supabase.ts
    ├── types/
    │   ├── database.types.ts
    │   └── supabase.ts
    ├── .cursor/
    │   └── rules/
    │       └── global_rules.md
    ├── .github/
    │   └── workflows/
    │       └── deploy.yml
    └── .vercel/
        ├── project.json
        └── README.txt
