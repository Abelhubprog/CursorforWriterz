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


Files Content:

(Files content cropped to 300k characters, download full ingest to see more)
================================================
FILE: README.md
================================================
# HandyWriterz Admin Portal and Content Management System

A comprehensive admin portal and content management system for HandyWriterz, built with React, TypeScript, Clerk for authentication, and Appwrite for backend services.

![HandyWriterz Admin Dashboard](https://example.com/dashboard-preview.png)

## 🚀 Features

### Authentication & Authorization
- Secure user authentication using Clerk
- Role-based access control
- Single sign-on capabilities
- Secure profile management

### Content Management
- Rich text editor with markdown support
- Media library for image, video, and document management
- Post scheduling and publishing
- SEO optimization tools
- Content categorization and tagging

### Communication Tools
- Comprehensive message inbox
- Reply management
- File attachment support
- Message archiving and starring

### Modern UI
- Responsive design for all devices
- Theme customization (light/dark mode)
- Color scheme selection
- Accessible interface with proper ARIA support

### Integration
- Seamless integration with Appwrite for backend services
- Real-time updates and notifications
- Data synchronization between Clerk and Appwrite

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS
- **Authentication**: Clerk
- **Backend & Database**: Appwrite
- **State Management**: React Context API & useState
- **UI Components**: Custom components with TailwindCSS
- **Icons**: Lucide React
- **Rich Text Editing**: React Quill, React Markdown
- **Code Highlighting**: React Syntax Highlighter
- **Notifications**: React Hot Toast

## 📋 Prerequisites

- Node.js 16.x or higher
- npm/yarn/pnpm
- Appwrite account
- Clerk account

## 🔧 Installation

1. **Clone the repository**

```bash
   git clone https://github.com/yourusername/handywriterz.git
   cd handywriterz
   ```

2. **Install dependencies**

```bash
   npm install
# or
yarn install
   # or
   pnpm install
   ```

3. **Environment setup**

   Create a `.env` file in the root directory with the following variables:

```
# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Appwrite Configuration
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
```

4. **Initialize Appwrite Collections**

Run the initialization script to set up all the required Appwrite collections, buckets, and indexes:

```bash
node scripts/initAppwrite.js
```

This will set up all required collections and indexes in your Appwrite project.

5. **Start the development server**

```bash
   npm run dev
# or
yarn dev
   # or
   pnpm dev
   ```

## ⚙️ Configuration

### Appwrite Setup

1. Create an Appwrite project in the [Appwrite Console](https://cloud.appwrite.io/)
2. Create an API key with the following permissions:
   - Databases: Read & Write
   - Storage: Read & Write
   - Users: Read & Write
3. Create the necessary buckets in Storage:
   - `media`: For storing images, videos, and general media files
   - `documents`: For storing documents like PDFs, Word files, etc.
   - `avatars`: For storing user avatars

### Clerk Setup

1. Create a Clerk application in the [Clerk Dashboard](https://dashboard.clerk.dev/)
2. Configure the following settings:
   - Authentication methods (email, social logins, etc.)
   - Sign-in and sign-up URLs
   - Redirect URLs after authentication
3. Get your Publishable Key from the Clerk Dashboard

## 🔍 Directory Structure

```
├── public/              # Static assets
├── scripts/             # Utility scripts for setup and maintenance
├── src/
│   ├── components/      # Reusable components
│   │   ├── admin/       # Admin-specific components
│   │   └── ui/          # UI components
│   │   └── services/    # Service pages
│   ├── lib/             # Library code and utilities
│   ├── pages/           # Page components
│   │   ├── admin/       # Admin pages
│   │   └── services/    # Service pages
│   ├── hooks/           # Custom React hooks
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
└── package.json         # Dependencies and scripts
```

## 🌟 Usage

### Admin Dashboard

Access the admin dashboard at `/admin`. You'll need admin privileges to access this area.

### Content Management

1. Creating new posts:
   - Navigate to Posts -> New Post
   - Fill in the details and use the rich text editor
   - Add tags, categories, and SEO information
   - Save as draft or publish immediately

2. Managing media:
   - Navigate to Media Library
   - Upload new files or manage existing ones
   - Use the media in your posts

### Message Management

1. Access the message inbox:
   - Navigate to Messages
   - View and respond to user inquiries
   - Star important messages and archive old ones

## 🔒 Security

- All API requests are authenticated
- Role-based access control ensures only authorized users can access admin features
- Clerk handles secure authentication
- Content is sanitized to prevent XSS attacks
- File uploads are validated for type and size

## 🚢 Deployment

### Build the Application

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This will generate a `dist` directory with the compiled assets.

### Deployment Options

1. **Static Hosting**:
   - Netlify, Vercel, or GitHub Pages
   - Configure redirects for SPA routing

2. **Docker Deployment**:
   - Use the included Dockerfile
   - Build: `docker build -t handywriterz .`
   - Run: `docker run -p 8080:80 handywriterz`

3. **Server Deployment**:
   - Copy the `dist` directory to your web server
   - Configure server for SPA routing

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📃 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email support@handywriterz.com or open an issue in the GitHub repository.

# HandyWriterz Service Pages with Appwrite

This document provides instructions for setting up and using the service pages in the HandyWriterz application with Appwrite as the backend.

## Features

- Multiple service areas (Adult Health Nursing, Mental Health Nursing, Child Nursing, Cryptocurrency)
- Content management through admin dashboard
- User authentication integration
- Interactive features (likes, comments, views)
- Advanced content filtering and search capabilities

## Setup Instructions

### 1. Appwrite Setup

1. Create an Appwrite project
2. Create a database in your Appwrite project
3. Set up API keys with appropriate permissions
4. Run the setup script to create all necessary collections

### 2. Environment Variables

Create a `.env` file with the following variables:

```
# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Appwrite Configuration
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your-database-id
VITE_APPWRITE_POSTS_COLLECTION_ID=posts
VITE_APPWRITE_CATEGORIES_COLLECTION_ID=categories
VITE_APPWRITE_COMMENTS_COLLECTION_ID=comments
VITE_APPWRITE_LIKES_COLLECTION_ID=likes
VITE_APPWRITE_VIEWS_COLLECTION_ID=views
VITE_APPWRITE_PROFILES_COLLECTION_ID=profiles
```

### 3. Run The Setup Script

Execute the setup script to create all necessary collections:

```bash
# Install dependencies if needed
npm install

# Run the setup script
node scripts/setup-appwrite.js
```

## Database Structure

The application uses the following collections:

### Posts Collection

Stores blog posts and service content:

- `id`: Unique identifier (auto-generated)
- `title`: Post title (required)
- `excerpt`: Short summary of the post
- `content`: Full HTML content of the post (required)
- `coverImage`: URL to the post's featured image
- `category`: Category name (required)
- `serviceType`: Type of service (adult-health-nursing, mental-health-nursing, child-nursing, crypto)
- `status`: Publication status (published, draft, archived)
- `authorId`: Reference to the user profile (required)
- `publishedAt`: Publication date
- `tags`: Array of post tags
- `likesCount`: Number of likes
- `commentsCount`: Number of comments
- `viewsCount`: Number of views

### Categories Collection

Organizes posts into categories:

- `id`: Unique identifier (auto-generated)
- `name`: Category name (required)
- `slug`: URL-friendly version of the name (required)
- `description`: Category description
- `serviceType`: Type of service
- `postCount`: Number of posts in the category

### Comments Collection

Stores user comments on posts:

- `id`: Unique identifier (auto-generated)
- `postId`: Reference to the post (required)
- `authorId`: Reference to the user profile (required)
- `content`: Comment text (required)
- `createdAt`: Creation timestamp
- `likesCount`: Number of likes

### Likes Collection

Tracks which posts users have liked:

- `id`: Unique identifier (auto-generated)
- `postId`: Reference to the post (required)
- `userId`: Reference to the user profile (required)
- `createdAt`: Creation timestamp

### Views Collection

Tracks post views:

- `id`: Unique identifier (auto-generated)
- `postId`: Reference to the post (required)
- `userId`: Reference to the user profile (optional)
- `viewedAt`: Timestamp of the view

### Profiles Collection

User profiles for the application:

- `id`: Unique identifier (auto-generated)
- `userId`: Reference to the authentication user ID
- `email`: User email (required)
- `fullName`: User's full name
- `avatarUrl`: URL to the user's avatar
- `role`: User role (user, editor, admin)
- `status`: Account status (active, inactive, pending)
- `lastLoginAt`: Last login timestamp
- `createdAt`: Creation timestamp
- `updatedAt`: Last update timestamp

## User Roles

The application supports the following user roles:

- **Admin**: Can create, edit, and delete all content; manage users
- **Editor**: Can create and edit content
- **User**: Can view published content, like, and comment

## Component Architecture

The service pages are built with the following components:

1. **ServicePage** - Main page component for each service
2. **PostsList** - Displays a grid or list of posts
3. **PostDetail** - Shows full post content
4. **CommentSection** - Displays and allows creating comments
5. **CategoryFilter** - Filters posts by category
6. **SearchBar** - Searches posts by title

## Admin Dashboard

The admin dashboard allows managing:

- Posts (create, edit, delete)
- Categories (create, edit, delete)
- Users (manage roles, status)
- Comments (moderate, delete)
- Analytics (view post performance)

Access the admin dashboard at `/admin/dashboard`.

## Admin Dashboard Setup Instructions

The HandyWriterz platform includes a powerful admin dashboard for managing content across all service pages. This guide will help you set up and use the admin dashboard.

### Setup Process

1. **Database Setup**

   The admin dashboard requires specific database tables. You can set these up by running our script:

   ```bash
   node scripts/setup_db.js
   ```

   This script will:
   - Create all necessary tables in your Supabase project
   - Set up the correct permissions
   - Optionally create an admin user
   - Optionally seed sample data for service pages

2. **Environment Configuration**

   Ensure your `.env` file contains the following Supabase configuration:

   ```
   VITE_SUPABASE_URL=https://your-project-ref.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

3. **Start the Application**

   Start the application in development mode:

   ```bash
   npm run dev
   ```

   The admin dashboard will be available at:
   ```
   http://localhost:5173/admin
   ```

### Admin Dashboard Features

The admin dashboard includes the following features:

#### Content Management

- **Service-Specific Content:** Create and manage content for individual service pages (Adult Health Nursing, Mental Health Nursing, Child Nursing, Cryptocurrency, AI)
- **Rich Content Editor:** Create content with markdown, images, videos, code blocks, and more
- **Content Organization:** Organize content with categories and tags
- **SEO Tools:** Optimize content with SEO metadata

#### User Management

- **User Administration:** Manage user accounts and permissions
- **Role-Based Access:** Assign roles (admin, editor, viewer) to control access

#### Service Page Configuration

- **Page Settings:** Configure service page layouts and display options
- **Featured Content:** Select content to feature on service pages
- **Visual Customization:** Set banner images and icons for service pages

#### Analytics

- **Content Performance:** View content performance metrics
- **User Engagement:** Track user engagement with content
- **Service Performance:** Compare performance across different service pages

### Using the Admin Dashboard

1. **Login to Admin**

   Navigate to `/admin/login` and sign in with your admin credentials.

2. **Dashboard Overview**

   The dashboard home provides an overview of all content and services.

3. **Managing Content**

   - To create new content, click "Create Content" or navigate to a specific service page and click "Add New"
   - Use the rich editor to create formatted content including code blocks with syntax highlighting
   - Schedule content publication for future dates if needed

4. **Service Configuration**

   - Navigate to Services > [Service Name] > Settings
   - Configure display options, SEO settings, and featured content

5. **User Management**

   - Navigate to Users to manage user accounts
   - Assign appropriate roles for team members

### Content Types

The platform supports various content types optimized for different service pages:

- **Text Articles:** Standard formatted articles with sections and images
- **Code Tutorials:** Content with syntax-highlighted code blocks (especially for Crypto/AI pages)
- **Video Content:** Embed and describe video content
- **Interactive Guides:** Step-by-step guides with rich formatting

### Troubleshooting

If you encounter issues with the admin dashboard:

1. Check Supabase connection in the browser console
2. Verify database tables were created correctly
3. Ensure your user has admin permissions
4. Check for any JavaScript errors in the console

For additional help, please contact support.




================================================
FILE: app.tsx
================================================
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './src/contexts/AuthContext';
import { AppRoutes } from './src/routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          <AppRoutes />
          <Toaster position="top-right" />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;



================================================
FILE: basic_policy.sql
================================================
-- Enable RLS
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Create a basic policy that allows access to everyone
CREATE POLICY "messages_policy" 
ON public.messages 
FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

-- Once this is working, we can refine the policy
-- First with a basic user policy
/*
CREATE POLICY "user_select_own_messages" 
ON public.messages 
FOR SELECT 
TO authenticated 
USING (auth.uid()::text = user_id::text);
*/ 


================================================
FILE: case_sensitive_check.sql
================================================
-- Check column names with exact case sensitivity
SELECT 
  attname, 
  pg_catalog.format_type(atttypid, atttypmod) as data_type
FROM 
  pg_catalog.pg_attribute 
WHERE 
  attrelid = 'public.messages'::regclass
  AND attnum > 0 
  AND NOT attisdropped
ORDER BY 
  attnum;

-- Try inserting with double-quoted column names to be case-sensitive
INSERT INTO public.messages ("id", "user_id", "content", "sender_type") 
VALUES 
  (uuid_generate_v4(), '00000000-0000-0000-0000-000000000000', 'Case sensitive test', 'user');

-- Alternative insert approach with different casing
INSERT INTO public.messages ("userid", "content", "sender_type") 
VALUES 
  ('00000000-0000-0000-0000-000000000000', 'Different casing test', 'user'); 


================================================
FILE: check_schema.js
================================================
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: resolve(__dirname, '.env.mcp') });

const supabaseUrl = `https://${process.env.SUPABASE_PROJECT_REF}.supabase.co`;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

console.log('Checking database schema...');
console.log('Project URL:', supabaseUrl);

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function checkSchema() {
  try {
    console.log('\nAttempting to list tables...');
    const { data: tables, error: tablesError } = await supabase
      .from('information_schema.tables')
      .select('table_name, table_type')
      .eq('table_schema', 'public')
      .neq('table_type', 'VIEW');

    if (tablesError) {
      console.error('Error fetching tables:', tablesError.message);
    } else {
      console.log('\nPublic Schema Tables:');
      if (tables.length === 0) {
        console.log('No tables found in public schema');
      } else {
        tables.forEach(table => {
          console.log(`- ${table.table_name} (${table.table_type})`);
        });
      }
    }

    console.log('\nAttempting to list functions...');
    const { data: functions, error: functionsError } = await supabase
      .from('information_schema.routines')
      .select('routine_name, data_type')
      .eq('routine_schema', 'public')
      .eq('routine_type', 'FUNCTION');

    if (functionsError) {
      console.error('Error fetching functions:', functionsError.message);
      
      // Try alternative approach using RPC
      console.log('\nTrying alternative approach to list functions...');
      const { data: funcList, error: funcListError } = await supabase
        .rpc('list_functions', {
          schema_name: 'public'
        });

      if (funcListError) {
        if (funcListError.message?.includes('function does not exist')) {
          console.log('\nPlease create this helper function in the SQL editor:');
          console.log(`
            create or replace function list_functions(schema_name text)
            returns table (
              function_name text,
              return_type text,
              argument_types text
            ) as $$
            select
              p.proname as function_name,
              pg_get_function_result(p.oid) as return_type,
              pg_get_function_arguments(p.oid) as argument_types
            from pg_proc p
            join pg_namespace n on p.pronamespace = n.oid
            where n.nspname = schema_name
            and p.prokind = 'f'
            order by p.proname;
            $$ language sql security definer;
          `);
        } else {
          console.error('Error listing functions:', funcListError.message);
        }
      } else if (funcList) {
        console.log('\nPublic Schema Functions:');
        funcList.forEach(func => {
          console.log(`- ${func.function_name}(${func.argument_types}) returns ${func.return_type}`);
        });
      }
    } else {
      console.log('\nPublic Schema Functions:');
      if (functions.length === 0) {
        console.log('No functions found in public schema');
      } else {
        functions.forEach(func => {
          console.log(`- ${func.routine_name} returns ${func.data_type}`);
        });
      }
    }

    // Try to check for api schema as well
    console.log('\nChecking for api schema...');
    const { data: apiTables, error: apiError } = await supabase
      .from('information_schema.tables')
      .select('table_name, table_type')
      .eq('table_schema', 'api')
      .neq('table_type', 'VIEW');

    if (!apiError && apiTables.length > 0) {
      console.log('\nAPI Schema Tables:');
      apiTables.forEach(table => {
        console.log(`- ${table.table_name} (${table.table_type})`);
      });
    }

  } catch (err) {
    console.error('\nError checking schema:', err.message);
    console.log('\nTroubleshooting steps:');
    console.log('1. Check if you have access to information_schema');
    console.log('2. Verify your service role key has sufficient permissions');
    console.log('3. Try running these queries directly in the SQL editor:');
    console.log(`
      -- List tables
      SELECT table_name, table_type
      FROM information_schema.tables
      WHERE table_schema = 'public'
      AND table_type != 'VIEW';

      -- List functions
      SELECT routine_name, data_type
      FROM information_schema.routines
      WHERE routine_schema = 'public'
      AND routine_type = 'FUNCTION';
    `);
  }
}

// Run schema check
checkSchema()
  .then(() => process.exit(0))
  .catch(() => process.exit(1)); 


================================================
FILE: check_table_structure.sql
================================================
-- Get detailed information about the messages table
SELECT 
  column_name, 
  data_type,
  column_default,
  is_nullable
FROM 
  information_schema.columns 
WHERE 
  table_schema = 'public' 
  AND table_name = 'messages'
ORDER BY 
  ordinal_position;

-- Also check if the table was actually created correctly
\d public.messages

-- Alternative way to check table structure
SELECT 
  c.relname as table_name,
  a.attname as column_name,
  pg_catalog.format_type(a.atttypid, a.atttypmod) as data_type
FROM 
  pg_catalog.pg_class c
  JOIN pg_catalog.pg_attribute a ON a.attrelid = c.oid
WHERE 
  c.relname = 'messages'
  AND a.attnum > 0
  AND NOT a.attisdropped
ORDER BY 
  a.attnum; 


================================================
FILE: complete_setup.sql
================================================
-- 1. First create the admin_users table
CREATE TABLE IF NOT EXISTS public.admin_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  is_super_admin BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Then create the is_admin function
DROP FUNCTION IF EXISTS public.is_admin();
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3. Create orders table
CREATE TABLE IF NOT EXISTS public.orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  file_url TEXT,
  status TEXT NOT NULL DEFAULT 'active',
  price DECIMAL(10, 2),
  due_date TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on orders
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Policies for orders table
-- Allow users to create their own orders
CREATE POLICY "Users can create their own orders"
ON public.orders
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Allow users to view their own orders
CREATE POLICY "Users can view their own orders"
ON public.orders
FOR SELECT
TO authenticated
USING (auth.uid() = user_id OR public.is_admin() = true);

-- Allow users to update their own orders
CREATE POLICY "Users can update their own orders"
ON public.orders
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Allow users to delete their own orders
CREATE POLICY "Users can delete their own orders"
ON public.orders
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- Allow admins to update any order
CREATE POLICY "Admins can update any order"
ON public.orders
FOR UPDATE
TO authenticated
USING (public.is_admin() = true)
WITH CHECK (public.is_admin() = true);

-- Create order indexes
CREATE INDEX IF NOT EXISTS orders_user_id_idx ON public.orders (user_id);
CREATE INDEX IF NOT EXISTS orders_status_idx ON public.orders (status);

-- 4. Create messages table
CREATE TABLE IF NOT EXISTS public.messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  admin_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  sender_type TEXT NOT NULL CHECK (sender_type IN ('user', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on messages
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Allow users to view messages related to them
CREATE POLICY "Users can view their own messages"
ON public.messages
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Allow users to send messages
CREATE POLICY "Users can send messages"
ON public.messages
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() = user_id AND 
  sender_type = 'user'
);

-- Allow users to mark messages as read
CREATE POLICY "Users can mark messages as read"
ON public.messages
FOR UPDATE
TO authenticated
USING (
  auth.uid() = user_id AND 
  sender_type = 'admin'
)
WITH CHECK (
  auth.uid() = user_id AND 
  sender_type = 'admin'
);

-- Allow admins to see all messages
CREATE POLICY "Admins can view all messages"
ON public.messages
FOR SELECT
TO authenticated
USING (public.is_admin() = true);

-- Allow admins to send messages to users
CREATE POLICY "Admins can send messages"
ON public.messages
FOR INSERT
TO authenticated
WITH CHECK (
  public.is_admin() = true AND 
  sender_type = 'admin'
);

-- Allow admins to update messages they sent
CREATE POLICY "Admins can update messages"
ON public.messages
FOR UPDATE
TO authenticated
USING (
  public.is_admin() = true AND 
  (sender_type = 'admin' OR sender_type = 'user')
)
WITH CHECK (
  public.is_admin() = true
);

-- Create message indexes
CREATE INDEX IF NOT EXISTS messages_user_id_idx ON public.messages (user_id);
CREATE INDEX IF NOT EXISTS messages_admin_id_idx ON public.messages (admin_id);
CREATE INDEX IF NOT EXISTS messages_created_at_idx ON public.messages (created_at); 


================================================
FILE: config.js
================================================

// ...existing code...
// Remove PayPal configuration such as:
// export const paypalConfig = {
//   clientId: 'YOUR_CLIENT_ID',
//   environment: 'sandbox' // or 'production'
// };
// ...existing code...


================================================
FILE: create_admin_users_table.sql
================================================
-- Create admin_users table
CREATE TABLE IF NOT EXISTS public.admin_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('admin', 'super_admin')),
  clerk_user_id TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Add RLS policies
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Create an is_admin function for policy checks
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users
    WHERE user_id = auth.uid() AND role IN ('admin', 'super_admin')
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a policy to allow admins to see all admin users
CREATE POLICY "Admins can view all admin users"
  ON public.admin_users
  FOR SELECT
  USING (is_admin());

-- Create a policy to allow super admins to insert/update admin users
CREATE POLICY "Super admins can manage admin users"
  ON public.admin_users
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users
      WHERE user_id = auth.uid() AND role = 'super_admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admin_users
      WHERE user_id = auth.uid() AND role = 'super_admin'
    )
  );

-- Create index for faster lookups
CREATE INDEX admin_users_user_id_idx ON public.admin_users(user_id);
CREATE INDEX admin_users_clerk_user_id_idx ON public.admin_users(clerk_user_id); 


================================================
FILE: create_assignments_bucket.sql
================================================
-- Create a new storage bucket for assignments if it doesn't exist
INSERT INTO storage.buckets (id, name, public, avif_autodetection)
VALUES ('assignments', 'Assignments', true, false)
ON CONFLICT (id) DO NOTHING;

-- Set up security policies for the assignments bucket
-- Allow authenticated users to upload files
CREATE POLICY "Allow authenticated uploads" 
ON storage.objects 
FOR INSERT 
TO authenticated 
WITH CHECK (bucket_id = 'assignments');

-- Allow users to read their own files
CREATE POLICY "Allow users to read own files" 
ON storage.objects 
FOR SELECT 
TO authenticated 
USING (
  bucket_id = 'assignments' AND 
  (storage.foldername(name))[1] = auth.uid()::text
);

-- Allow users to update their own files
CREATE POLICY "Allow users to update own files" 
ON storage.objects 
FOR UPDATE 
TO authenticated 
USING (
  bucket_id = 'assignments' AND 
  (storage.foldername(name))[1] = auth.uid()::text
);

-- Allow users to delete their own files
CREATE POLICY "Allow users to delete own files" 
ON storage.objects 
FOR DELETE 
TO authenticated 
USING (
  bucket_id = 'assignments' AND 
  (storage.foldername(name))[1] = auth.uid()::text
);

-- Allow admins to access all files in the assignments bucket
CREATE POLICY "Allow admins to access all files" 
ON storage.objects 
FOR ALL 
TO authenticated 
USING (
  bucket_id = 'assignments' AND 
  public.is_admin() = true
); 


================================================
FILE: create_conversations_table.sql
================================================
-- Create conversations table
CREATE TABLE IF NOT EXISTS public.conversations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  admin_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  subject TEXT NOT NULL,
  last_message TEXT,
  last_message_time TIMESTAMPTZ DEFAULT now(),
  unread_count INTEGER DEFAULT 0,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'closed', 'archived')),
  order_id UUID,
  order_number TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Add RLS policies
ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;

-- Users can view their own conversations
CREATE POLICY "Users can view their own conversations"
  ON public.conversations
  FOR SELECT
  USING (auth.uid() = user_id);

-- Users can create their own conversations
CREATE POLICY "Users can create their own conversations"
  ON public.conversations
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own conversations
CREATE POLICY "Users can update their own conversations"
  ON public.conversations
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Allow admins to access all conversations (this assumes you have a function to check if a user is an admin)
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users
    WHERE user_id = auth.uid() AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Admins can view all conversations
CREATE POLICY "Admins can view all conversations"
  ON public.conversations
  FOR SELECT
  USING (is_admin());

-- Admins can update all conversations
CREATE POLICY "Admins can update all conversations"
  ON public.conversations
  FOR UPDATE
  USING (is_admin())
  WITH CHECK (is_admin());

-- Create index for faster lookups
CREATE INDEX conversations_user_id_idx ON public.conversations(user_id);
CREATE INDEX conversations_status_idx ON public.conversations(status);
CREATE INDEX conversations_last_message_time_idx ON public.conversations(last_message_time DESC); 


================================================
FILE: create_messages_only.sql
================================================
-- Create messages table
CREATE TABLE IF NOT EXISTS public.messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  admin_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  sender_type TEXT NOT NULL CHECK (sender_type IN ('user', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on messages
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Allow users to view messages related to them
CREATE POLICY "Users can view their own messages"
ON public.messages
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Allow users to send messages
CREATE POLICY "Users can send messages"
ON public.messages
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() = user_id AND 
  sender_type = 'user'
);

-- Allow users to mark messages as read
CREATE POLICY "Users can mark messages as read"
ON public.messages
FOR UPDATE
TO authenticated
USING (
  auth.uid() = user_id AND 
  sender_type = 'admin'
)
WITH CHECK (
  auth.uid() = user_id AND 
  sender_type = 'admin'
);

-- Allow admins to see all messages
CREATE POLICY "Admins can view all messages"
ON public.messages
FOR SELECT
TO authenticated
USING (public.is_admin() = true);

-- Allow admins to send messages to users
CREATE POLICY "Admins can send messages"
ON public.messages
FOR INSERT
TO authenticated
WITH CHECK (
  public.is_admin() = true AND 
  sender_type = 'admin'
);

-- Allow admins to update messages they sent
CREATE POLICY "Admins can update messages"
ON public.messages
FOR UPDATE
TO authenticated
USING (
  public.is_admin() = true AND 
  (sender_type = 'admin' OR sender_type = 'user')
)
WITH CHECK (
  public.is_admin() = true
);

-- Create message indexes
CREATE INDEX IF NOT EXISTS messages_user_id_idx ON public.messages (user_id);
CREATE INDEX IF NOT EXISTS messages_admin_id_idx ON public.messages (admin_id);
CREATE INDEX IF NOT EXISTS messages_created_at_idx ON public.messages (created_at); 


================================================
FILE: create_messages_table.sql
================================================
-- Create messages table
CREATE TABLE IF NOT EXISTS public.messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  conversation_id UUID NOT NULL REFERENCES public.conversations(id) ON DELETE CASCADE,
  sender_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  receiver_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  attachments TEXT[] DEFAULT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Add RLS policies
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Users can view messages in their conversations
CREATE POLICY "Users can view messages in their conversations"
  ON public.messages
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.conversations
      WHERE conversations.id = messages.conversation_id
      AND conversations.user_id = auth.uid()
    )
  );

-- Users can insert messages in their conversations
CREATE POLICY "Users can insert messages in their conversations"
  ON public.messages
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.conversations
      WHERE conversations.id = messages.conversation_id
      AND conversations.user_id = auth.uid()
    ) AND sender_id = auth.uid()
  );

-- Users can update messages they've sent
CREATE POLICY "Users can update their own messages"
  ON public.messages
  FOR UPDATE
  USING (sender_id = auth.uid())
  WITH CHECK (sender_id = auth.uid());

-- Admins can view all messages
CREATE POLICY "Admins can view all messages"
  ON public.messages
  FOR SELECT
  USING (is_admin());

-- Admins can insert messages in any conversation
CREATE POLICY "Admins can insert messages in any conversation"
  ON public.messages
  FOR INSERT
  WITH CHECK (is_admin() AND sender_id = auth.uid());

-- Admins can update any message
CREATE POLICY "Admins can update any message"
  ON public.messages
  FOR UPDATE
  USING (is_admin())
  WITH CHECK (is_admin());

-- Create indices for faster lookups
CREATE INDEX messages_conversation_id_idx ON public.messages(conversation_id);
CREATE INDEX messages_sender_id_idx ON public.messages(sender_id);
CREATE INDEX messages_receiver_id_idx ON public.messages(receiver_id);
CREATE INDEX messages_created_at_idx ON public.messages(created_at);
CREATE INDEX messages_is_read_idx ON public.messages(is_read);

-- Create an admin function if it doesn't exist
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users
    WHERE id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER; 


================================================
FILE: create_orders_and_admin_tables.sql
================================================
-- Create orders table
CREATE TABLE IF NOT EXISTS public.orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  file_url TEXT,
  status TEXT NOT NULL DEFAULT 'active',
  price DECIMAL(10, 2),
  due_date TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on orders
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Create admin_users table for storing admin privileges
CREATE TABLE IF NOT EXISTS public.admin_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  is_super_admin BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create a function to check if a user is an admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Policies for orders table
-- Allow users to create their own orders
CREATE POLICY "Users can create their own orders"
ON public.orders
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Allow users to view their own orders
CREATE POLICY "Users can view their own orders"
ON public.orders
FOR SELECT
TO authenticated
USING (auth.uid() = user_id OR public.is_admin() = true);

-- Allow users to update their own orders
CREATE POLICY "Users can update their own orders"
ON public.orders
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Allow users to delete their own orders
CREATE POLICY "Users can delete their own orders"
ON public.orders
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- Allow admins to update any order
CREATE POLICY "Admins can update any order"
ON public.orders
FOR UPDATE
TO authenticated
USING (public.is_admin() = true)
WITH CHECK (public.is_admin() = true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS orders_user_id_idx ON public.orders (user_id);
CREATE INDEX IF NOT EXISTS orders_status_idx ON public.orders (status); 


================================================
FILE: deployment-guide.md
================================================
# HandyWriterz Deployment Guide

This document outlines the steps to deploy the HandyWriterz application to production.

## Prerequisites

- Node.js v16+ and pnpm installed on the deployment machine
- Access to production environment variables
- Access to the following services:
  - Appwrite Cloud account
  - Supabase account (if using Supabase)
  - Clerk authentication account
  - Domain and hosting provider

## Step 1: Prepare Environment Variables

1. Ensure all necessary environment variables from `.env.production` are available in your production environment.
2. Critical secrets to set in your deployment platform's environment variables:
   - `CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `DATABASE_URL`
   - `APPWRITE_API_KEY`
   - `COINBASE_COMMERCE_API_KEY`
   - `COINBASE_PUBLIC_KEY`
   - `COINBASE_COMMERCE_WEBHOOK_SECRET`
   - `PUBLIC_ONCHAINKIT_API_KEY`
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHANNEL_ID`

## Step 2: Build the Application

1. Clone the repository to your deployment machine or CI/CD environment
2. Install dependencies:
```bash
pnpm install
```
3. Build the application:
```bash
pnpm build
```
4. The built files will be generated in the `dist` directory

## Step 3: Set Up Backend Services

### Appwrite Setup

1. Configure Appwrite collections and buckets:
```bash
pnpm run setup-appwrite-db-ultimate
pnpm run create-final-collections
pnpm run setup-appwrite-storage
pnpm run create-buckets
```

2. Create an admin user:
```bash
pnpm run create-appwrite-admin
```

### Database Setup (If using Supabase)

1. Initialize Supabase:
```bash
pnpm run init-supabase
```

2. Run any required migrations:
```bash
pnpm run run-migrations
```

## Step 4: Deploy to Hosting Provider

### Option 1: Deploying to Vercel

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `pnpm build`
   - Output Directory: `dist`
   - Install Command: `pnpm install`
3. Add all environment variables from `.env.production` to Vercel project settings
4. Deploy

### Option 2: Deploying to Netlify

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build Command: `pnpm build`
   - Publish Directory: `dist`
3. Add all environment variables from `.env.production` to Netlify project settings
4. Deploy

### Option 3: Traditional Hosting

1. Upload the contents of the `dist` directory to your web server
2. Configure your web server to serve the application:
   - Set up proper caching headers for static assets
   - Configure HTTPS
   - Set up URL rewriting to handle client-side routing (all requests should be directed to index.html)

## Step 5: Configure Domains and DNS

1. Point your domain(s) to your hosting provider:
   - Main domain: handywriterz.com
   - Admin subdomain (if separate): admin.handywriterz.com
   - Accounts subdomain (if separate): accounts.handywriterz.com

2. Configure SSL certificates for all domains

## Step 6: Post-Deployment Verification

1. Verify the application is accessible at the configured domain(s)
2. Test login functionality
3. Test all critical application features:
   - User registration
   - Content creation
   - File uploads
   - Payment processing
   - Administrative functions
4. Check error logging and monitoring

## Step 7: Production Monitoring and Maintenance

1. Set up application monitoring and logging
2. Configure automated backups for your databases
3. Set up continuous deployment for future updates
4. Document regular maintenance procedures

## Troubleshooting

### Common Issues

1. **API Connection Issues**: Verify environment variables for API endpoints and authentication are correct

2. **Authentication Problems**: Ensure Clerk keys are properly configured

3. **Database Connection Failures**: Check database connection strings and credentials

4. **CORS Errors**: Verify the domains in the CORS settings match your production domains

### Support Resources

For help with deployment issues, refer to:
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Appwrite Documentation](https://appwrite.io/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Clerk Documentation](https://clerk.com/docs)

## Security Considerations

1. Ensure all sensitive environment variables are securely stored
2. Configure proper Content Security Policy headers
3. Enable HTTPS for all connections
4. Regularly update dependencies for security patches
5. Configure rate limiting for API endpoints
6. Implement proper authentication checks for all sensitive routes 


================================================
FILE: DEPLOYMENT.md
================================================
# Vercel Deployment Guide

## Quick Start

1. First, verify your deployment setup:
```bash
node verify-deployment.js
```
This will check all prerequisites and configurations, ensuring your project is ready for deployment.

2. Run the deployment script for your platform:
- Windows: `.\vercel-deploy.ps1`
- Unix/Mac: `chmod +x vercel-deploy.sh && ./vercel-deploy.sh`

3. Follow the guided deployment steps that appear after the script completes.

## Prerequisites
- A Vercel account
- A GitHub account
- Git installed on your machine
- Node.js >= 18.0.0
- pnpm installed (`npm install -g pnpm`)

## Step 1: Local Preparation

1. Ensure all changes are committed to your repository:
```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```

2. Verify your build locally:
```bash
pnpm install
pnpm build:vercel
```

## Step 2: Environment Variables

1. Create a new file called `.env.production` with your production values:
```env
VITE_APP_URL=https://your-production-domain.vercel.app
VITE_SUPABASE_URL=your-supabase-production-url
VITE_SUPABASE_ANON_KEY=your-supabase-production-key
VITE_CLERK_PUBLISHABLE_KEY=your-clerk-production-key
NODE_ENV=production
SKIP_PREFLIGHT_CHECK=true
TSC_COMPILE_ON_ERROR=true
```

## Step 3: Vercel Setup

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your Git repository
4. Configure project settings:
   - Framework Preset: Vite
   - Build Command: `node scripts/vercel-build.js`
   - Output Directory: `dist`
   - Node.js Version: 18.x

5. Add Environment Variables in Vercel:
   - Go to Settings > Environment Variables
   - Add all variables from your `.env.production`
   - Required variables:
     ```
     VITE_SUPABASE_URL
     VITE_SUPABASE_ANON_KEY
     VITE_CLERK_PUBLISHABLE_KEY
     VITE_APP_URL
     NODE_ENV
     SKIP_PREFLIGHT_CHECK
     TSC_COMPILE_ON_ERROR
     ```

## Step 4: Deploy

1. Click "Deploy" in Vercel dashboard
2. Watch the build logs for any issues
3. Once deployed, Vercel will provide you with a production URL

## Step 5: Post-Deployment Verification

1. Visit your deployed site
2. Verify these features work:
   - Authentication (Clerk sign-in/sign-up)
   - Supabase connections
   - API endpoints
   - Static asset loading
   - Routing (test different pages)

## Troubleshooting

If you encounter build errors:

1. Check build logs in Vercel dashboard
2. Common issues:
   - Missing environment variables
   - TypeScript errors (these won't block deployment but should be reviewed)
   - Dependencies not installing correctly

2. If build fails:
   - Review `build-error-log.txt` in your repository
   - Ensure all dependencies are in package.json
   - Verify Node.js version compatibility

## Maintenance

- Monitor your deployment:
  - Vercel dashboard analytics
  - Error tracking
  - Performance metrics

- For updates:
  1. Make changes locally
  2. Test with `pnpm build:vercel`
  3. Commit and push to GitHub
  4. Vercel will automatically deploy updates

## Production Considerations

1. Enable these features in Vercel dashboard:
   - Automatic Preview Deployments
   - Pull Request Comments
   - Production Branch Protection

2. Configure custom domain:
   - Go to Settings > Domains
   - Add your custom domain
   - Follow DNS configuration instructions

3. Enable these production optimizations:
   - Edge Caching
   - Automatic HTTPS
   - Serverless Functions (if used)



================================================
FILE: DOCS.md
================================================
# HandyWriterz Documentation

## SEO Implementation

### Overview

HandyWriterz implements a comprehensive SEO strategy using `react-helmet-async` to manage document head metadata. This implementation ensures that all pages have proper metadata for search engines and social media platforms.

### SEO Component

The core of our SEO implementation is the reusable `SEO` component located at `src/components/SEO.tsx`. This component provides a standardized way to set metadata across the application.

```tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: 'website' | 'article' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  canonicalUrl?: string;
  noIndex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'HandyWriterz - Your Writing Assistant',
  description = 'HandyWriterz helps you create, edit, and manage your writing projects with ease.',
  keywords = 'writing, assistant, content creation, editing, AI writing',
  ogImage,
  ogUrl,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  noIndex = false,
}) => {
  // Component implementation
}
```

### Usage

To use the SEO component in a page or component:

```tsx
import SEO from '@/components/SEO';

const MyPage = () => {
  return (
    <>
      <SEO 
        title="Page Title | HandyWriterz"
        description="Detailed page description for search engines"
        keywords="relevant, keywords, for, this, page"
        ogImage="/path/to/custom-image.jpg"
      />
      {/* Page content */}
    </>
  );
};
```

### Default Open Graph Image

The application includes a default Open Graph image for social media sharing. This image is generated using the script at `scripts/generate-og-image.js` and saved to `public/images/og-default.jpg`.

To generate or update the default Open Graph image:

```bash
npm run generate-og
# or
pnpm generate-og
```

### SEO Best Practices Implemented

1. **Dynamic Metadata**: Each page has unique, relevant metadata.
2. **Open Graph Protocol**: Proper implementation for Facebook and other social media platforms.
3. **Twitter Cards**: Twitter-specific metadata for rich media sharing.
4. **Canonical URLs**: Prevents duplicate content issues.
5. **Responsive Design**: Mobile-friendly pages for better search rankings.
6. **Semantic HTML**: Proper use of HTML5 semantic elements.

### SEO for Blog Posts

Blog posts have enhanced SEO with:

- **Article-specific metadata**: Title, description, and keywords tailored to the content.
- **Rich media sharing**: Featured images used for social media cards.
- **Structured data**: JSON-LD implementation for rich search results.
- **Canonical URLs**: Proper URL management to prevent duplicate content.

### SEO for Service Pages

Service pages include:

- **Service-specific metadata**: Title, description, and keywords related to the service.
- **Custom Open Graph images**: Service-specific images for social sharing when available.
- **Breadcrumb navigation**: Helps search engines understand site structure.

## Implementation in Key Components

### BlogPostDetail Component

The `BlogPostDetail` component uses the SEO component to set metadata specific to each blog post:

```tsx
<SEO
  title={`${post.meta_title || post.title} | HandyWriterz`}
  description={post.meta_description || post.excerpt}
  keywords={post.tags?.join(', ')}
  ogImage={post.featured_image}
  ogUrl={window.location.href}
  ogType="article"
  twitterCard="summary_large_image"
  canonicalUrl={window.location.href}
/>
```

### ServiceBlogTemplate Component

The `ServiceBlogTemplate` component sets service-specific metadata:

```tsx
<SEO
  title={metaTitle}
  description={metaDescription}
  keywords={`${serviceType?.replace(/-/g, ' ')}, academic services, handywriterz, academic writing`}
  ogImage={servicePage?.featured_image}
  ogUrl={window.location.href}
  ogType="website"
  twitterCard="summary_large_image"
  canonicalUrl={window.location.href}
/>
```

## Future SEO Enhancements

Planned enhancements to the SEO implementation include:

1. **Structured Data**: Implement JSON-LD for rich search results.
2. **Sitemap Generation**: Automated sitemap generation for search engines.
3. **Performance Optimization**: Improve page load times for better rankings.
4. **Analytics Integration**: Track SEO performance metrics.
5. **AMP Support**: Accelerated Mobile Pages for faster mobile loading. 


================================================
FILE: drop_and_recreate.sql
================================================
-- First, drop the existing table
DROP TABLE IF EXISTS public.messages;

-- Recreate the messages table
CREATE TABLE public.messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  admin_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  sender_type TEXT NOT NULL CHECK (sender_type IN ('user', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Now let's verify the columns
SELECT 
  column_name, 
  data_type,
  column_default,
  is_nullable
FROM 
  information_schema.columns 
WHERE 
  table_schema = 'public' 
  AND table_name = 'messages'
ORDER BY 
  ordinal_position; 


================================================
FILE: env-test.js
================================================
// This is a simple script to check if .env variables are loaded
// Run with: node env-test.js
const fs = require('fs');
const path = require('path');

console.log('Checking environment files:');

// Check for .env files
const envFiles = [
  '.env',
  '.env.local',
  '.env.development',
  '.env.production',
  '.env.fixed',
  '.env.mcp'
];

envFiles.forEach(file => {
  try {
    const filePath = path.join(__dirname, file);
    const stats = fs.statSync(filePath);
    console.log(`✅ ${file} exists (${stats.size} bytes)`);
    
    // Read first few lines to verify content
    const content = fs.readFileSync(filePath, 'utf8');
    const firstLines = content.split('\n').slice(0, 3).join('\n');
    console.log(`  Preview: ${firstLines.substring(0, 100)}${firstLines.length > 100 ? '...' : ''}`);
  } catch (err) {
    console.log(`❌ ${file} does not exist or cannot be read`);
  }
});

console.log('\nNote: For Vite to load variables correctly:');
console.log('1. Variables must be prefixed with VITE_');
console.log('2. .env.local has higher priority than .env');
console.log('3. Restart the dev server after changing environment files'); 


================================================
FILE: eslint.config.js
================================================
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);



================================================
FILE: find_real_user.sql
================================================
-- Find a real user ID that exists in the auth.users table
SELECT id FROM auth.users LIMIT 1;

-- Check how many users exist
SELECT COUNT(*) FROM auth.users;

-- If we need to create a test user (uncomment if needed)
-- INSERT INTO auth.users (id, email) 
-- VALUES (uuid_generate_v4(), 'test@example.com')
-- RETURNING id; 


================================================
FILE: fix_admin_function.sql
================================================
-- Drop the existing function first to ensure we replace it
DROP FUNCTION IF EXISTS public.is_admin();

-- Create the admin function with the correct column reference
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users
    WHERE id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER; 


================================================
FILE: fix_supabase_tables.sql
================================================
-- Comprehensive database schema fix for HandyWriterz

-- 1. Check if views table exists and add missing status column if needed
DO $$
BEGIN
  -- Create views table if it doesn't exist
  IF NOT EXISTS (
    SELECT FROM information_schema.tables 
    WHERE table_schema = 'public' 
    AND table_name = 'views'
  ) THEN
    CREATE TABLE public.views (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      post_id UUID,
      user_id UUID,
      service_type TEXT,
      view_count INTEGER DEFAULT 1,
      status TEXT DEFAULT 'active',
      created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
      last_viewed_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
      user_agent TEXT,
      ip_address TEXT,
      referrer TEXT
    );
    
    RAISE NOTICE 'Created views table';
  ELSE
    -- Add status column if it doesn't exist
    IF NOT EXISTS (
      SELECT FROM information_schema.columns 
      WHERE table_schema = 'public' 
      AND table_name = 'views' 
      AND column_name = 'status'
    ) THEN
      ALTER TABLE public.views ADD COLUMN status TEXT DEFAULT 'active';
      RAISE NOTICE 'Added status column to views table';
    ELSE
      RAISE NOTICE 'Status column already exists in views table';
    END IF;
  END IF;
  
  -- 2. Check if post_views table exists and create if needed
  IF NOT EXISTS (
    SELECT FROM information_schema.tables 
    WHERE table_schema = 'public' 
    AND table_name = 'post_views'
  ) THEN
    -- Create post_views table referenced in analyticsService.ts
    CREATE TABLE public.post_views (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      post_id UUID,
      user_id UUID,
      view_count INTEGER DEFAULT 1,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
    );
    
    RAISE NOTICE 'Created post_views table';
  END IF;
  
  -- 3. Create other missing tables referenced in analyticsService
  IF NOT EXISTS (
    SELECT FROM information_schema.tables 
    WHERE table_schema = 'public' 
    AND table_name = 'post_likes'
  ) THEN
    CREATE TABLE public.post_likes (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      post_id UUID,
      user_id UUID,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
    );
    
    RAISE NOTICE 'Created post_likes table';
  END IF;
  
  IF NOT EXISTS (
    SELECT FROM information_schema.tables 
    WHERE table_schema = 'public' 
    AND table_name = 'post_shares'
  ) THEN
    CREATE TABLE public.post_shares (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      post_id UUID,
      user_id UUID,
      platform TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
    );
    
    RAISE NOTICE 'Created post_shares table';
  END IF;
  
  -- 4. Create indexes for performance
  IF NOT EXISTS (
    SELECT FROM pg_indexes 
    WHERE tablename = 'views' 
    AND indexname = 'views_post_id_idx'
  ) THEN
    CREATE INDEX views_post_id_idx ON public.views(post_id);
    CREATE INDEX views_service_type_idx ON public.views(service_type);
  END IF;
  
  IF NOT EXISTS (
    SELECT FROM pg_indexes 
    WHERE tablename = 'post_views' 
    AND indexname = 'post_views_post_id_idx'
  ) THEN
    CREATE INDEX post_views_post_id_idx ON public.post_views(post_id);
  END IF;
  
END;
$$;

-- Show tables with their columns for verification
SELECT 
  table_name, 
  string_agg(column_name, ', ' ORDER BY ordinal_position) as columns
FROM 
  information_schema.columns
WHERE 
  table_schema = 'public' AND 
  table_name IN ('views', 'post_views', 'post_likes', 'post_shares')
GROUP BY 
  table_name
ORDER BY 
  table_name; 


================================================
FILE: fix_views_table.sql
================================================
-- Fix the views table by adding the missing status column
-- Run this in the Supabase SQL Editor to fix the "column status does not exist" error

-- Create the views table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.views (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  post_id UUID,
  user_id UUID,
  service_type TEXT,
  view_count INTEGER DEFAULT 1,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  last_viewed_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  user_agent TEXT,
  ip_address TEXT,
  referrer TEXT
);

-- If the table already exists but is missing the status column, add it
DO $$
BEGIN
  IF EXISTS (
    SELECT FROM information_schema.tables 
    WHERE table_schema = 'public' 
    AND table_name = 'views'
  ) AND NOT EXISTS (
    SELECT FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'views' 
    AND column_name = 'status'
  ) THEN
    ALTER TABLE public.views ADD COLUMN status TEXT DEFAULT 'active';
  END IF;
END
$$;

-- Output confirmation
SELECT 
  'views' AS table_name,
  CASE 
    WHEN EXISTS (
      SELECT FROM information_schema.columns 
      WHERE table_schema = 'public' 
      AND table_name = 'views' 
      AND column_name = 'status'
    ) THEN 'Status column exists'
    ELSE 'Status column does not exist'
  END AS status; 


================================================
FILE: implementation-summary.md
================================================
[Non-text file]


================================================
FILE: index.html
================================================
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HandyWriterz</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        // Look for any development mode text elements
        const devModeTexts = document.querySelectorAll('[data-dev-mode]');
        if (devModeTexts.length) {
          devModeTexts.forEach(function(element) {
            element.style.display = 'none';
          });
        }
        
        // Additional method to remove the specific development mode message if exists
        const devModeFooter = document.querySelector('.development-mode-footer');
        if (devModeFooter) {
          devModeFooter.remove();
        }
      });
    </script>
  </body>
</html>



================================================
FILE: install-supabase-cli.bat
================================================
@echo off
echo Supabase CLI Installation Script
echo ===============================
echo.

REM Check if Supabase CLI is already installed
where supabase >nul 2>&1
if %ERRORLEVEL% == 0 (
    echo Supabase CLI is already installed.
    supabase --version
    goto :EOF
)

REM Check for available package managers
set "npm_available=0"
set "pnpm_available=0"
set "yarn_available=0"

where npm >nul 2>&1
if %ERRORLEVEL% == 0 set "npm_available=1"

where pnpm >nul 2>&1
if %ERRORLEVEL% == 0 set "pnpm_available=1"

where yarn >nul 2>&1
if %ERRORLEVEL% == 0 set "yarn_available=1"

set /a total_managers=%npm_available% + %pnpm_available% + %yarn_available%

if %total_managers% == 0 (
    echo No supported package manager (npm, pnpm, yarn) found.
    echo Please install one of these package managers first.
    goto :EOF
)

REM If multiple package managers are available, let the user choose
if %total_managers% GTR 1 (
    echo Multiple package managers detected. Please choose one:
    set /a counter=0
    if %npm_available% == 1 (
        echo [%counter%] npm
        set /a counter+=1
    )
    if %pnpm_available% == 1 (
        echo [%counter%] pnpm
        set /a counter+=1
    )
    if %yarn_available% == 1 (
        echo [%counter%] yarn
    )
    
    set /p choice="Enter the number of your choice: "
    
    set /a counter=0
    if %npm_available% == 1 (
        if %choice% == %counter% set "selected_manager=npm"
        set /a counter+=1
    )
    if %pnpm_available% == 1 (
        if %choice% == %counter% set "selected_manager=pnpm"
        set /a counter+=1
    )
    if %yarn_available% == 1 (
        if %choice% == %counter% set "selected_manager=yarn"
    )
) else (
    if %npm_available% == 1 set "selected_manager=npm"
    if %pnpm_available% == 1 set "selected_manager=pnpm"
    if %yarn_available% == 1 set "selected_manager=yarn"
    echo Using %selected_manager% to install Supabase CLI.
)

REM Install Supabase CLI using the selected package manager
echo Installing Supabase CLI using %selected_manager%...

if "%selected_manager%"=="npm" (
    npm install -g supabase
) else if "%selected_manager%"=="pnpm" (
    pnpm install -g supabase
) else if "%selected_manager%"=="yarn" (
    yarn global add supabase
)

if %ERRORLEVEL% == 0 (
    echo Supabase CLI installed successfully!
    supabase --version
) else (
    echo Failed to install Supabase CLI.
    goto :EOF
)

REM Verify installation
where supabase >nul 2>&1
if %ERRORLEVEL% == 0 (
    echo Supabase CLI is now available.
    echo.
    echo Next steps:
    echo 1. Run 'supabase login' to authenticate with your Supabase account
    echo 2. Run 'supabase init' in your project directory (if not already initialized)
    echo 3. Run 'supabase link --project-ref your-project-ref' to link to your remote project
    echo 4. Run the setup script: 'setup-turnitin-infrastructure.bat'
) else (
    echo Supabase CLI installation verification failed.
) 


================================================
FILE: install-supabase-cli.ps1
================================================
# PowerShell script to install Supabase CLI

Write-Host "Supabase CLI Installation Script" -ForegroundColor Cyan
Write-Host "===============================" -ForegroundColor Cyan
Write-Host ""

function Test-CommandExists {
    param ($command)
    $oldPreference = $ErrorActionPreference
    $ErrorActionPreference = 'stop'
    try {
        if (Get-Command $command) { return $true }
    } catch {
        return $false
    } finally {
        $ErrorActionPreference = $oldPreference
    }
}

# Check if Supabase CLI is already installed
if (Test-CommandExists "supabase") {
    Write-Host "Supabase CLI is already installed." -ForegroundColor Green
    supabase --version
    exit 0
}

# Try to detect available package managers
$packageManagers = @()

if (Test-CommandExists "npm") {
    $packageManagers += "npm"
}

if (Test-CommandExists "pnpm") {
    $packageManagers += "pnpm"
}

if (Test-CommandExists "yarn") {
    $packageManagers += "yarn"
}

if ($packageManagers.Count -eq 0) {
    Write-Host "No supported package manager (npm, pnpm, yarn) found." -ForegroundColor Red
    Write-Host "Please install one of these package managers first." -ForegroundColor Red
    exit 1
}

# If multiple package managers are available, let the user choose
if ($packageManagers.Count -gt 1) {
    Write-Host "Multiple package managers detected. Please choose one:" -ForegroundColor Yellow
    for ($i = 0; $i -lt $packageManagers.Count; $i++) {
        Write-Host "[$i] $($packageManagers[$i])"
    }
    
    $choice = Read-Host "Enter the number of your choice"
    $selectedManager = $packageManagers[$choice]
} else {
    $selectedManager = $packageManagers[0]
    Write-Host "Using $selectedManager to install Supabase CLI." -ForegroundColor Yellow
}

# Install Supabase CLI using the selected package manager
Write-Host "Installing Supabase CLI using $selectedManager..." -ForegroundColor Cyan

try {
    switch ($selectedManager) {
        "npm" {
            npm install -g supabase
        }
        "pnpm" {
            pnpm install -g supabase
        }
        "yarn" {
            yarn global add supabase
        }
    }

    if ($LASTEXITCODE -eq 0) {
        Write-Host "Supabase CLI installed successfully!" -ForegroundColor Green
        supabase --version
    } else {
        Write-Host "Failed to install Supabase CLI." -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "An error occurred during installation: $_" -ForegroundColor Red
    exit 1
}

# Verify installation
if (Test-CommandExists "supabase") {
    Write-Host "Supabase CLI is now available." -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "1. Run 'supabase login' to authenticate with your Supabase account" -ForegroundColor White
    Write-Host "2. Run 'supabase init' in your project directory (if not already initialized)" -ForegroundColor White
    Write-Host "3. Run 'supabase link --project-ref your-project-ref' to link to your remote project" -ForegroundColor White
    Write-Host "4. Run the setup script: '.\setup-turnitin-infrastructure.ps1'" -ForegroundColor White
} else {
    Write-Host "Supabase CLI installation verification failed." -ForegroundColor Red
    exit 1
} 


================================================
FILE: install-supabase-cli.sh
================================================
#!/bin/bash
# Shell script to install Supabase CLI

echo -e "\033[1;36mSupabase CLI Installation Script\033[0m"
echo -e "\033[1;36m===============================\033[0m"
echo ""

# Function to check if a command exists
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Check if Supabase CLI is already installed
if command_exists supabase; then
  echo -e "\033[1;32mSupabase CLI is already installed.\033[0m"
  supabase --version
  exit 0
fi

# Try to detect available package managers
package_managers=()

if command_exists npm; then
  package_managers+=("npm")
fi

if command_exists pnpm; then
  package_managers+=("pnpm")
fi

if command_exists yarn; then
  package_managers+=("yarn")
fi

if [ ${#package_managers[@]} -eq 0 ]; then
  echo -e "\033[1;31mNo supported package manager (npm, pnpm, yarn) found.\033[0m"
  echo -e "\033[1;31mPlease install one of these package managers first.\033[0m"
  exit 1
fi

# If multiple package managers are available, let the user choose
if [ ${#package_managers[@]} -gt 1 ]; then
  echo -e "\033[1;33mMultiple package managers detected. Please choose one:\033[0m"
  for i in "${!package_managers[@]}"; do
    echo "[$i] ${package_managers[$i]}"
  done
  
  read -p "Enter the number of your choice: " choice
  selected_manager=${package_managers[$choice]}
else
  selected_manager=${package_managers[0]}
  echo -e "\033[1;33mUsing $selected_manager to install Supabase CLI.\033[0m"
fi

# Install Supabase CLI using the selected package manager
echo -e "\033[1;36mInstalling Supabase CLI using $selected_manager...\033[0m"

case $selected_manager in
  "npm")
    npm install -g supabase
    ;;
  "pnpm")
    pnpm install -g supabase
    ;;
  "yarn")
    yarn global add supabase
    ;;
esac

if [ $? -eq 0 ]; then
  echo -e "\033[1;32mSupabase CLI installed successfully!\033[0m"
  supabase --version
else
  echo -e "\033[1;31mFailed to install Supabase CLI.\033[0m"
  exit 1
fi

# Verify installation
if command_exists supabase; then
  echo -e "\033[1;32mSupabase CLI is now available.\033[0m"
  echo ""
  echo -e "\033[1;36mNext steps:\033[0m"
  echo -e "1. Run 'supabase login' to authenticate with your Supabase account"
  echo -e "2. Run 'supabase init' in your project directory (if not already initialized)"
  echo -e "3. Run 'supabase link --project-ref your-project-ref' to link to your remote project"
  echo -e "4. Run the setup script: './setup-turnitin-infrastructure.sh'"
else
  echo -e "\033[1;31mSupabase CLI installation verification failed.\033[0m"
  exit 1
fi 


================================================
FILE: install.ps1
================================================
# Issue Tracker: https://github.com/ScoopInstaller/Install/issues
# Unlicense License:
#
# This is free and unencumbered software released into the public domain.
#
# Anyone is free to copy, modify, publish, use, compile, sell, or
# distribute this software, either in source code form or as a compiled
# binary, for any purpose, commercial or non-commercial, and by any
# means.
#
# In jurisdictions that recognize copyright laws, the author or authors
# of this software dedicate any and all copyright interest in the
# software to the public domain. We make this dedication for the benefit
# of the public at large and to the detriment of our heirs and
# successors. We intend this dedication to be an overt act of
# relinquishment in perpetuity of all present and future rights to this
# software under copyright law.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
# EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
# MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
# IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
# OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
# ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
# OTHER DEALINGS IN THE SOFTWARE.
#
# For more information, please refer to <http://unlicense.org/>

<#
.SYNOPSIS
    Scoop installer.
.DESCRIPTION
    The installer of Scoop. For details please check the website and wiki.
.PARAMETER ScoopDir
    Specifies Scoop root path.
    If not specified, Scoop will be installed to '$env:USERPROFILE\scoop'.
.PARAMETER ScoopGlobalDir
    Specifies directory to store global apps.
    If not specified, global apps will be installed to '$env:ProgramData\scoop'.
.PARAMETER ScoopCacheDir
    Specifies cache directory.
    If not specified, caches will be downloaded to '$ScoopDir\cache'.
.PARAMETER NoProxy
    Bypass system proxy during the installation.
.PARAMETER Proxy
    Specifies proxy to use during the installation.
.PARAMETER ProxyCredential
    Specifies credential for the given proxy.
.PARAMETER ProxyUseDefaultCredentials
    Use the credentials of the current user for the proxy server that is specified by the -Proxy parameter.
.PARAMETER RunAsAdmin
    Force to run the installer as administrator.
.LINK
    https://scoop.sh
.LINK
    https://github.com/ScoopInstaller/Scoop/wiki
#>
param(
    [String] $ScoopDir,
    [String] $ScoopGlobalDir,
    [String] $ScoopCacheDir,
    [Switch] $NoProxy,
    [Uri] $Proxy,
    [System.Management.Automation.PSCredential] $ProxyCredential,
    [Switch] $ProxyUseDefaultCredentials,
    [Switch] $RunAsAdmin
)

# Disable StrictMode in this script
Set-StrictMode -Off

function Write-InstallInfo {
    param(
        [Parameter(Mandatory = $True, Position = 0)]
        [String] $String,
        [Parameter(Mandatory = $False, Position = 1)]
        [System.ConsoleColor] $ForegroundColor = $host.UI.RawUI.ForegroundColor
    )

    $backup = $host.UI.RawUI.ForegroundColor

    if ($ForegroundColor -ne $host.UI.RawUI.ForegroundColor) {
        $host.UI.RawUI.ForegroundColor = $ForegroundColor
    }

    Write-Output "$String"

    $host.UI.RawUI.ForegroundColor = $backup
}

function Deny-Install {
    param(
        [String] $message,
        [Int] $errorCode = 1
    )

    Write-InstallInfo -String $message -ForegroundColor DarkRed
    Write-InstallInfo 'Abort.'

    # Don't abort if invoked with iex that would close the PS session
    if ($IS_EXECUTED_FROM_IEX) {
        break
    } else {
        exit $errorCode
    }
}

function Test-LanguageMode {
    if ($ExecutionContext.SessionState.LanguageMode -ne 'FullLanguage') {
        Write-Output 'Scoop requires PowerShell FullLanguage mode to run, current PowerShell environment is restricted.'
        Write-Output 'Abort.'

        if ($IS_EXECUTED_FROM_IEX) {
            break
        } else {
            exit $errorCode
        }
    }
}

function Test-ValidateParameter {
    if ($null -eq $Proxy -and ($null -ne $ProxyCredential -or $ProxyUseDefaultCredentials)) {
        Deny-Install 'Provide a valid proxy URI for the -Proxy parameter when using the -ProxyCredential or -ProxyUseDefaultCredentials.'
    }

    if ($ProxyUseDefaultCredentials -and $null -ne $ProxyCredential) {
        Deny-Install "ProxyUseDefaultCredentials is conflict with ProxyCredential. Don't use the -ProxyCredential and -ProxyUseDefaultCredentials together."
    }
}

function Test-IsAdministrator {
    return ([Security.Principal.WindowsPrincipal]`
            [Security.Principal.WindowsIdentity]::GetCurrent()`
    ).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
}

function Test-Prerequisite {
    # Scoop requires PowerShell 5 at least
    if (($PSVersionTable.PSVersion.Major) -lt 5) {
        Deny-Install 'PowerShell 5 or later is required to run Scoop. Go to https://microsoft.com/powershell to get the latest version of PowerShell.'
    }

    # Scoop requires TLS 1.2 SecurityProtocol, which exists in .NET Framework 4.5+
    if ([System.Enum]::GetNames([System.Net.SecurityProtocolType]) -notcontains 'Tls12') {
        Deny-Install 'Scoop requires .NET Framework 4.5+ to work. Go to https://microsoft.com/net/download to get the latest version of .NET Framework.'
    }

    # Ensure Robocopy.exe is accessible
    if (!(Test-CommandAvailable('robocopy'))) {
        Deny-Install "Scoop requires 'C:\Windows\System32\Robocopy.exe' to work. Please make sure 'C:\Windows\System32' is in your PATH."
    }

    # Detect if RunAsAdministrator, there is no need to run as administrator when installing Scoop
    if (!$RunAsAdmin -and (Test-IsAdministrator)) {
        # Exception: Windows Sandbox, GitHub Actions CI
        $exception = ($env:USERNAME -eq 'WDAGUtilityAccount') -or ($env:GITHUB_ACTIONS -eq 'true' -and $env:CI -eq 'true')
        if (!$exception) {
            Deny-Install 'Running the installer as administrator is disabled by default, see https://github.com/ScoopInstaller/Install#for-admin for details.'
        }
    }

    # Show notification to change execution policy
    $allowedExecutionPolicy = @('Unrestricted', 'RemoteSigned', 'ByPass')
    if ((Get-ExecutionPolicy).ToString() -notin $allowedExecutionPolicy) {
        Deny-Install "PowerShell requires an execution policy in [$($allowedExecutionPolicy -join ', ')] to run Scoop. For example, to set the execution policy to 'RemoteSigned' please run 'Set-ExecutionPolicy RemoteSigned -Scope CurrentUser'."
    }

    # Test if scoop is installed, by checking if scoop command exists.
    if (Test-CommandAvailable('scoop')) {
        Deny-Install "Scoop is already installed. Run 'scoop update' to get the latest version."
    }
}

function Optimize-SecurityProtocol {
    # .NET Framework 4.7+ has a default security protocol called 'SystemDefault',
    # which allows the operating system to choose the best protocol to use.
    # If SecurityProtocolType contains 'SystemDefault' (means .NET4.7+ detected)
    # and the value of SecurityProtocol is 'SystemDefault', just do nothing on SecurityProtocol,
    # 'SystemDefault' will use TLS 1.2 if the webrequest requires.
    $isNewerNetFramework = ([System.Enum]::GetNames([System.Net.SecurityProtocolType]) -contains 'SystemDefault')
    $isSystemDefault = ([System.Net.ServicePointManager]::SecurityProtocol.Equals([System.Net.SecurityProtocolType]::SystemDefault))

    # If not, change it to support TLS 1.2
    if (!($isNewerNetFramework -and $isSystemDefault)) {
        # Set to TLS 1.2 (3072), then TLS 1.1 (768), and TLS 1.0 (192). Ssl3 has been superseded,
        # https://docs.microsoft.com/en-us/dotnet/api/system.net.securityprotocoltype?view=netframework-4.5
        [System.Net.ServicePointManager]::SecurityProtocol = 3072 -bor 768 -bor 192
        Write-Verbose 'SecurityProtocol has been updated to support TLS 1.2'
    }
}

function Get-Downloader {
    $downloadSession = New-Object System.Net.WebClient

    # Set proxy to null if NoProxy is specificed
    if ($NoProxy) {
        $downloadSession.Proxy = $null
    } elseif ($Proxy) {
        # Prepend protocol if not provided
        if (!$Proxy.IsAbsoluteUri) {
            $Proxy = New-Object System.Uri('http://' + $Proxy.OriginalString)
        }

        $Proxy = New-Object System.Net.WebProxy($Proxy)

        if ($null -ne $ProxyCredential) {
            $Proxy.Credentials = $ProxyCredential.GetNetworkCredential()
        } elseif ($ProxyUseDefaultCredentials) {
            $Proxy.UseDefaultCredentials = $true
        }

        $downloadSession.Proxy = $Proxy
    }

    return $downloadSession
}

function Test-isFileLocked {
    param(
        [String] $path
    )

    $file = New-Object System.IO.FileInfo $path

    if (!(Test-Path $path)) {
        return $false
    }

    try {
        $stream = $file.Open(
            [System.IO.FileMode]::Open,
            [System.IO.FileAccess]::ReadWrite,
            [System.IO.FileShare]::None
        )
        if ($stream) {
            $stream.Close()
        }
        return $false
    } catch {
        # The file is locked by a process.
        return $true
    }
}

function Expand-ZipArchive {
    param(
        [String] $path,
        [String] $to
    )

    if (!(Test-Path $path)) {
        Deny-Install "Unzip failed: can't find $path to unzip."
    }

    # Check if the zip file is locked, by antivirus software for example
    $retries = 0
    while ($retries -le 10) {
        if ($retries -eq 10) {
            Deny-Install "Unzip failed: can't unzip because a process is locking the file."
        }
        if (Test-isFileLocked $path) {
            Write-InstallInfo "Waiting for $path to be unlocked by another process... ($retries/10)"
            $retries++
            Start-Sleep -Seconds 2
        } else {
            break
        }
    }

    # Workaround to suspend Expand-Archive verbose output,
    # upstream issue: https://github.com/PowerShell/Microsoft.PowerShell.Archive/issues/98
    $oldVerbosePreference = $VerbosePreference
    $global:VerbosePreference = 'SilentlyContinue'

    # Disable progress bar to gain performance
    $oldProgressPreference = $ProgressPreference
    $global:ProgressPreference = 'SilentlyContinue'

    # PowerShell 5+: use Expand-Archive to extract zip files
    Microsoft.PowerShell.Archive\Expand-Archive -Path $path -DestinationPath $to -Force
    $global:VerbosePreference = $oldVerbosePreference
    $global:ProgressPreference = $oldProgressPreference
}

function Out-UTF8File {
    param(
        [Parameter(Mandatory = $True, Position = 0)]
        [Alias('Path')]
        [String] $FilePath,
        [Switch] $Append,
        [Switch] $NoNewLine,
        [Parameter(ValueFromPipeline = $True)]
        [PSObject] $InputObject
    )
    process {
        if ($Append) {
            [System.IO.File]::AppendAllText($FilePath, $InputObject)
        } else {
            if (!$NoNewLine) {
                # Ref: https://stackoverflow.com/questions/5596982
                # Performance Note: `WriteAllLines` throttles memory usage while
                # `WriteAllText` needs to keep the complete string in memory.
                [System.IO.File]::WriteAllLines($FilePath, $InputObject)
            } else {
                # However `WriteAllText` does not add ending newline.
                [System.IO.File]::WriteAllText($FilePath, $InputObject)
            }
        }
    }
}

function Import-ScoopShim {
    Write-InstallInfo 'Creating shim...'
    # The scoop executable
    $path = "$SCOOP_APP_DIR\bin\scoop.ps1"

    if (!(Test-Path $SCOOP_SHIMS_DIR)) {
        New-Item -Type Directory $SCOOP_SHIMS_DIR | Out-Null
    }

    # The scoop shim
    $shim = "$SCOOP_SHIMS_DIR\scoop"

    # Convert to relative path
    Push-Location $SCOOP_SHIMS_DIR
    $relativePath = Resolve-Path -Relative $path
    Pop-Location
    $absolutePath = Resolve-Path $path

    # if $path points to another drive resolve-path prepends .\ which could break shims
    $ps1text = if ($relativePath -match '^(\.\\)?\w:.*$') {
        @(
            "# $absolutePath",
            "`$path = `"$path`"",
            "if (`$MyInvocation.ExpectingInput) { `$input | & `$path $arg @args } else { & `$path $arg @args }",
            "exit `$LASTEXITCODE"
        )
    } else {
        @(
            "# $absolutePath",
            "`$path = Join-Path `$PSScriptRoot `"$relativePath`"",
            "if (`$MyInvocation.ExpectingInput) { `$input | & `$path $arg @args } else { & `$path $arg @args }",
            "exit `$LASTEXITCODE"
        )
    }
    $ps1text -join "`r`n" | Out-UTF8File "$shim.ps1"

    # make ps1 accessible from cmd.exe
    @(
        "@rem $absolutePath",
        '@echo off',
        'setlocal enabledelayedexpansion',
        'set args=%*',
        ':: replace problem characters in arguments',
        "set args=%args:`"='%",
        "set args=%args:(=``(%",
        "set args=%args:)=``)%",
        "set invalid=`"='",
        'if !args! == !invalid! ( set args= )',
        'where /q pwsh.exe',
        'if %errorlevel% equ 0 (',
        "    pwsh -noprofile -ex unrestricted -file `"$absolutePath`" $arg %args%",
        ') else (',
        "    powershell -noprofile -ex unrestricted -file `"$absolutePath`" $arg %args%",
        ')'
    ) -join "`r`n" | Out-UTF8File "$shim.cmd"

    @(
        '#!/bin/sh',
        "# $absolutePath",
        'if command -v pwsh.exe > /dev/null 2>&1; then',
        "    pwsh.exe -noprofile -ex unrestricted -file `"$absolutePath`" $arg `"$@`"",
        'else',
        "    powershell.exe -noprofile -ex unrestricted -file `"$absolutePath`" $arg `"$@`"",
        'fi'
    ) -join "`n" | Out-UTF8File $shim -NoNewLine
}

function Get-Env {
    param(
        [String] $name,
        [Switch] $global
    )

    $RegisterKey = if ($global) {
        Get-Item -Path 'HKLM:\SYSTEM\CurrentControlSet\Control\Session Manager'
    } else {
        Get-Item -Path 'HKCU:'
    }

    $EnvRegisterKey = $RegisterKey.OpenSubKey('Environment')
    $RegistryValueOption = [Microsoft.Win32.RegistryValueOptions]::DoNotExpandEnvironmentNames
    $EnvRegisterKey.GetValue($name, $null, $RegistryValueOption)
}

function Publish-Env {
    if (-not ('Win32.NativeMethods' -as [Type])) {
        Add-Type -Namespace Win32 -Name NativeMethods -MemberDefinition @'
[DllImport("user32.dll", SetLastError = true, CharSet = CharSet.Auto)]
public static extern IntPtr SendMessageTimeout(
    IntPtr hWnd, uint Msg, UIntPtr wParam, string lParam,
    uint fuFlags, uint uTimeout, out UIntPtr lpdwResult);
'@
    }

    $HWND_BROADCAST = [IntPtr] 0xffff
    $WM_SETTINGCHANGE = 0x1a
    $result = [UIntPtr]::Zero

    [Win32.Nativemethods]::SendMessageTimeout($HWND_BROADCAST,
        $WM_SETTINGCHANGE,
        [UIntPtr]::Zero,
        'Environment',
        2,
        5000,
        [ref] $result
    ) | Out-Null
}

function Write-Env {
    param(
        [String] $name,
        [String] $val,
        [Switch] $global
    )

    $RegisterKey = if ($global) {
        Get-Item -Path 'HKLM:\SYSTEM\CurrentControlSet\Control\Session Manager'
    } else {
        Get-Item -Path 'HKCU:'
    }

    $EnvRegisterKey = $RegisterKey.OpenSubKey('Environment', $true)
    if ($val -eq $null) {
        $EnvRegisterKey.DeleteValue($name)
    } else {
        $RegistryValueKind = if ($val.Contains('%')) {
            [Microsoft.Win32.RegistryValueKind]::ExpandString
        } elseif ($EnvRegisterKey.GetValue($name)) {
            $EnvRegisterKey.GetValueKind($name)
        } else {
            [Microsoft.Win32.RegistryValueKind]::String
        }
        $EnvRegisterKey.SetValue($name, $val, $RegistryValueKind)
    }
    Publish-Env
}

function Add-ShimsDirToPath {
    # Get $env:PATH of current user
    $userEnvPath = Get-Env 'PATH'

    if ($userEnvPath -notmatch [Regex]::Escape($SCOOP_SHIMS_DIR)) {
        $h = (Get-PSProvider 'FileSystem').Home
        if (!$h.EndsWith('\')) {
            $h += '\'
        }

        if (!($h -eq '\')) {
            $friendlyPath = "$SCOOP_SHIMS_DIR" -Replace ([Regex]::Escape($h)), '~\'
            Write-InstallInfo "Adding $friendlyPath to your path."
        } else {
            Write-InstallInfo "Adding $SCOOP_SHIMS_DIR to your path."
        }

        # For future sessions
        Write-Env 'PATH' "$SCOOP_SHIMS_DIR;$userEnvPath"
        # For current session
        $env:PATH = "$SCOOP_SHIMS_DIR;$env:PATH"
    }
}

function Use-Config {
    if (!(Test-Path $SCOOP_CONFIG_FILE)) {
        return $null
    }

    try {
        return (Get-Content $SCOOP_CONFIG_FILE -Raw | ConvertFrom-Json -ErrorAction Stop)
    } catch {
        Deny-Install "ERROR loading $SCOOP_CONFIG_FILE`: $($_.Exception.Message)"
    }
}

function Add-Config {
    param (
        [Parameter(Mandatory = $True, Position = 0)]
        [String] $Name,
        [Parameter(Mandatory = $True, Position = 1)]
        [String] $Value
    )

    $scoopConfig = Use-Config

    if ($scoopConfig -is [System.Management.Automation.PSObject]) {
        if ($Value -eq [bool]::TrueString -or $Value -eq [bool]::FalseString) {
            $Value = [System.Convert]::ToBoolean($Value)
        }
        if ($null -eq $scoopConfig.$Name) {
            $scoopConfig | Add-Member -MemberType NoteProperty -Name $Name -Value $Value
        } else {
            $scoopConfig.$Name = $Value
        }
    } else {
        $baseDir = Split-Path -Path $SCOOP_CONFIG_FILE
        if (!(Test-Path $baseDir)) {
            New-Item -Type Directory $baseDir | Out-Null
        }

        $scoopConfig = New-Object PSObject
        $scoopConfig | Add-Member -MemberType NoteProperty -Name $Name -Value $Value
    }

    if ($null -eq $Value) {
        $scoopConfig.PSObject.Properties.Remove($Name)
    }

    ConvertTo-Json $scoopConfig | Set-Content $SCOOP_CONFIG_FILE -Encoding ASCII
    return $scoopConfig
}

function Add-DefaultConfig {
    # If user-level SCOOP env not defined, save to root_path
    if (!(Get-Env 'SCOOP')) {
        if ($SCOOP_DIR -ne "$env:USERPROFILE\scoop") {
            Write-Verbose "Adding config root_path: $SCOOP_DIR"
            Add-Config -Name 'root_path' -Value $SCOOP_DIR | Out-Null
        }
    }

    # Use system SCOOP_GLOBAL, or set system SCOOP_GLOBAL
    # with $env:SCOOP_GLOBAL if RunAsAdmin, otherwise save to global_path
    if (!(Get-Env 'SCOOP_GLOBAL' -global)) {
        if ((Test-IsAdministrator) -and $env:SCOOP_GLOBAL) {
            Write-Verbose "Setting System Environment Variable SCOOP_GLOBAL: $env:SCOOP_GLOBAL"
            [Environment]::SetEnvironmentVariable('SCOOP_GLOBAL', $env:SCOOP_GLOBAL, 'Machine')
        } else {
            if ($SCOOP_GLOBAL_DIR -ne "$env:ProgramData\scoop") {
                Write-Verbose "Adding config global_path: $SCOOP_GLOBAL_DIR"
                Add-Config -Name 'global_path' -Value $SCOOP_GLOBAL_DIR | Out-Null
            }
        }
    }

    # Use system SCOOP_CACHE, or set system SCOOP_CACHE
    # with $env:SCOOP_CACHE if RunAsAdmin, otherwise save to cache_path
    if (!(Get-Env 'SCOOP_CACHE' -global)) {
        if ((Test-IsAdministrator) -and $env:SCOOP_CACHE) {
            Write-Verbose "Setting System Environment Variable SCOOP_CACHE: $env:SCOOP_CACHE"
            [Environment]::SetEnvironmentVariable('SCOOP_CACHE', $env:SCOOP_CACHE, 'Machine')
        } else {
            if ($SCOOP_CACHE_DIR -ne "$SCOOP_DIR\cache") {
                Write-Verbose "Adding config cache_path: $SCOOP_CACHE_DIR"
                Add-Config -Name 'cache_path' -Value $SCOOP_CACHE_DIR | Out-Null
            }
        }
    }

    # save current datatime to last_update
    Add-Config -Name 'last_update' -Value ([System.DateTime]::Now.ToString('o')) | Out-Null
}

function Test-CommandAvailable {
    param (
        [Parameter(Mandatory = $True, Position = 0)]
        [String] $Command
    )
    return [Boolean](Get-Command $Command -ErrorAction SilentlyContinue)
}

function Install-Scoop {
    Write-InstallInfo 'Initializing...'
    # Validate install parameters
    Test-ValidateParameter
    # Check prerequisites
    Test-Prerequisite
    # Enable TLS 1.2
    Optimize-SecurityProtocol

    # Download scoop from GitHub
    Write-InstallInfo 'Downloading...'
    $downloader = Get-Downloader
    [bool]$downloadZipsRequired = $True

    if (Test-CommandAvailable('git')) {
        $old_https = $env:HTTPS_PROXY
        $old_http = $env:HTTP_PROXY
        try {
            if ($downloader.Proxy) {
                #define env vars for git when behind a proxy
                $Env:HTTP_PROXY = $downloader.Proxy.Address
                $Env:HTTPS_PROXY = $downloader.Proxy.Address
            }
            Write-Verbose "Cloning $SCOOP_PACKAGE_GIT_REPO to $SCOOP_APP_DIR"
            git clone -q $SCOOP_PACKAGE_GIT_REPO $SCOOP_APP_DIR
            if (-Not $?) {
                throw 'Cloning failed. Falling back to downloading zip files.'
            }
            Write-Verbose "Cloning $SCOOP_MAIN_BUCKET_GIT_REPO to $SCOOP_MAIN_BUCKET_DIR"
            git clone -q $SCOOP_MAIN_BUCKET_GIT_REPO $SCOOP_MAIN_BUCKET_DIR
            if (-Not $?) {
                throw 'Cloning failed. Falling back to downloading zip files.'
            }
            $downloadZipsRequired = $False
        } catch {
            Write-Warning "$($_.Exception.Message)"
            $Global:LastExitCode = 0
        } finally {
            $env:HTTPS_PROXY = $old_https
            $env:HTTP_PROXY = $old_http
        }
    }

    if ($downloadZipsRequired) {
        # 1. download scoop
        $scoopZipfile = "$SCOOP_APP_DIR\scoop.zip"
        if (!(Test-Path $SCOOP_APP_DIR)) {
            New-Item -Type Directory $SCOOP_APP_DIR | Out-Null
        }
        Write-Verbose "Downloading $SCOOP_PACKAGE_REPO to $scoopZipfile"
        $downloader.downloadFile($SCOOP_PACKAGE_REPO, $scoopZipfile)
        # 2. download scoop main bucket
        $scoopMainZipfile = "$SCOOP_MAIN_BUCKET_DIR\scoop-main.zip"
        if (!(Test-Path $SCOOP_MAIN_BUCKET_DIR)) {
            New-Item -Type Directory $SCOOP_MAIN_BUCKET_DIR | Out-Null
        }
        Write-Verbose "Downloading $SCOOP_MAIN_BUCKET_REPO to $scoopMainZipfile"
        $downloader.downloadFile($SCOOP_MAIN_BUCKET_REPO, $scoopMainZipfile)

        # Extract files from downloaded zip
        Write-InstallInfo 'Extracting...'
        # 1. extract scoop
        $scoopUnzipTempDir = "$SCOOP_APP_DIR\_tmp"
        Write-Verbose "Extracting $scoopZipfile to $scoopUnzipTempDir"
        Expand-ZipArchive $scoopZipfile $scoopUnzipTempDir
        Copy-Item "$scoopUnzipTempDir\scoop-*\*" $SCOOP_APP_DIR -Recurse -Force
        # 2. extract scoop main bucket
        $scoopMainUnzipTempDir = "$SCOOP_MAIN_BUCKET_DIR\_tmp"
        Write-Verbose "Extracting $scoopMainZipfile to $scoopMainUnzipTempDir"
        Expand-ZipArchive $scoopMainZipfile $scoopMainUnzipTempDir
        Copy-Item "$scoopMainUnzipTempDir\Main-*\*" $SCOOP_MAIN_BUCKET_DIR -Recurse -Force

        # Cleanup
        Remove-Item $scoopUnzipTempDir -Recurse -Force
        Remove-Item $scoopZipfile
        Remove-Item $scoopMainUnzipTempDir -Recurse -Force
        Remove-Item $scoopMainZipfile
    }
    # Create the scoop shim
    Import-ScoopShim
    # Finially ensure scoop shims is in the PATH
    Add-ShimsDirToPath
    # Setup initial configuration of Scoop
    Add-DefaultConfig

    Write-InstallInfo 'Scoop was installed successfully!' -ForegroundColor DarkGreen
    Write-InstallInfo "Type 'scoop help' for instructions."
}

function Write-DebugInfo {
    param($BoundArgs)

    Write-Verbose '-------- PSBoundParameters --------'
    $BoundArgs.GetEnumerator() | ForEach-Object { Write-Verbose $_ }
    Write-Verbose '-------- Environment Variables --------'
    Write-Verbose "`$env:USERPROFILE: $env:USERPROFILE"
    Write-Verbose "`$env:ProgramData: $env:ProgramData"
    Write-Verbose "`$env:SCOOP: $env:SCOOP"
    Write-Verbose "`$env:SCOOP_CACHE: $SCOOP_CACHE"
    Write-Verbose "`$env:SCOOP_GLOBAL: $env:SCOOP_GLOBAL"
    Write-Verbose '-------- Selected Variables --------'
    Write-Verbose "SCOOP_DIR: $SCOOP_DIR"
    Write-Verbose "SCOOP_CACHE_DIR: $SCOOP_CACHE_DIR"
    Write-Verbose "SCOOP_GLOBAL_DIR: $SCOOP_GLOBAL_DIR"
    Write-Verbose "SCOOP_CONFIG_HOME: $SCOOP_CONFIG_HOME"
}

# Prepare variables
$IS_EXECUTED_FROM_IEX = ($null -eq $MyInvocation.MyCommand.Path)

# Abort when the language mode is restricted
Test-LanguageMode

# Scoop root directory
$SCOOP_DIR = $ScoopDir, $env:SCOOP, "$env:USERPROFILE\scoop" | Where-Object { -not [String]::IsNullOrEmpty($_) } | Select-Object -First 1
# Scoop global apps directory
$SCOOP_GLOBAL_DIR = $ScoopGlobalDir, $env:SCOOP_GLOBAL, "$env:ProgramData\scoop" | Where-Object { -not [String]::IsNullOrEmpty($_) } | Select-Object -First 1
# Scoop cache directory
$SCOOP_CACHE_DIR = $ScoopCacheDir, $env:SCOOP_CACHE, "$SCOOP_DIR\cache" | Where-Object { -not [String]::IsNullOrEmpty($_) } | Select-Object -First 1
# Scoop shims directory
$SCOOP_SHIMS_DIR = "$SCOOP_DIR\shims"
# Scoop itself directory
$SCOOP_APP_DIR = "$SCOOP_DIR\apps\scoop\current"
# Scoop main bucket directory
$SCOOP_MAIN_BUCKET_DIR = "$SCOOP_DIR\buckets\main"
# Scoop config file location
$SCOOP_CONFIG_HOME = $env:XDG_CONFIG_HOME, "$env:USERPROFILE\.config" | Select-Object -First 1
$SCOOP_CONFIG_FILE = "$SCOOP_CONFIG_HOME\scoop\config.json"

# TODO: Use a specific version of Scoop and the main bucket
$SCOOP_PACKAGE_REPO = 'https://github.com/ScoopInstaller/Scoop/archive/master.zip'
$SCOOP_MAIN_BUCKET_REPO = 'https://github.com/ScoopInstaller/Main/archive/master.zip'

$SCOOP_PACKAGE_GIT_REPO = 'https://github.com/ScoopInstaller/Scoop.git'
$SCOOP_MAIN_BUCKET_GIT_REPO = 'https://github.com/ScoopInstaller/Main.git'

# Quit if anything goes wrong
$oldErrorActionPreference = $ErrorActionPreference
$ErrorActionPreference = 'Stop'

# Logging debug info
Write-DebugInfo $PSBoundParameters
# Bootstrap function
Install-Scoop

# Reset $ErrorActionPreference to original value
$ErrorActionPreference = $oldErrorActionPreference



================================================
FILE: jest.config.js
================================================
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: 'tsconfig.json',
    }],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
  ],
  testEnvironmentOptions: {
    url: 'http://localhost'
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  }
};


================================================
FILE: jest.setup.js
================================================
// Import testing utilities
import '@testing-library/jest-dom';
import 'jest-environment-jsdom';

// Mock global objects that might not be available in the test environment
global.process = {
  ...process,
  env: {
    ...process.env,
    // Add any environment variables needed for tests
    NODE_ENV: 'test',
    TELEGRAM_BOT_TOKEN: 'test-token',
    TELEGRAM_BOT_CHAT_ID: 'test-chat-id',
    TELEGRAM_WEBHOOK_SECRET: 'test-webhook-secret',
    STORAGE_BUCKET: 'test-bucket',
    STORAGE_REGION: 'test-region',
    STORAGE_ACCESS_KEY: 'test-access-key',
    STORAGE_SECRET_KEY: 'test-secret-key',
  },
};

// Mock Buffer if needed
if (typeof Buffer === 'undefined') {
  global.Buffer = require('buffer').Buffer;
}

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

// Setup any global test utilities
jest.setTimeout(30000); // 30 seconds timeout for tests

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));


================================================
FILE: package.json
================================================
{
  "name": "handywriterz",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "description": "Professional academic services platform",
  "engines": {
    "node": ">=18.0.0"
  },
  "scripts": {
    "dev": "vite",
    "build": "tsc --noEmit && vite build",
    "typecheck": "tsc --noEmit",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "vercel-build": "node scripts/vercel-build.js"
  },
  "dependencies": {
    "@clerk/clerk-react": "^4.30.6",
    "@clerk/themes": "^1.7.9",
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.0",
    "@hookform/resolvers": "^4.1.3",
    "@monaco-editor/react": "^4.7.0",
    "@mui/icons-material": "^6.4.8",
    "@mui/material": "^6.4.8",
    "@prisma/client": "^6.5.0",
    "@radix-ui/react-alert-dialog": "^1.1.6",
    "@radix-ui/react-checkbox": "^1.0.4",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-label": "^2.1.2",
    "@radix-ui/react-popover": "^1.1.6",
    "@radix-ui/react-select": "^2.1.6",
    "@radix-ui/react-separator": "^1.1.2",
    "@radix-ui/react-slot": "^1.1.2",
    "@radix-ui/react-switch": "^1.1.3",
    "@radix-ui/react-tabs": "^1.1.3",
    "@radix-ui/react-toast": "^1.1.5",
    "@supabase/supabase-js": "^2.39.7",
    "@tanstack/react-query": "^5.69.0",
    "@tanstack/react-query-devtools": "^5.69.0",
    "@types/node-schedule": "^2.1.7",
    "@types/node-telegram-bot-api": "^0.64.8",
    "@uiw/react-md-editor": "^4.0.3",
    "axios": "^1.8.4",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.0",
    "coinbase-commerce": "^1.1.0",
    "date-fns": "^4.1.0",
    "dotenv": "^16.4.7",
    "form-data": "^4.0.2",
    "framer-motion": "^11.0.8",
    "lucide-react": "^0.344.0",
    "next": "^15.2.3",
    "node-schedule": "^2.1.1",
    "node-telegram-bot-api": "^0.66.0",
    "pdf-lib": "^1.17.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-dropzone": "^14.3.8",
    "react-error-boundary": "^5.0.0",
    "react-helmet-async": "^2.0.4",
    "react-hook-form": "^7.54.2",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^5.5.0",
    "react-markdown": "^10.1.0",
    "react-router-dom": "^6.22.2",
    "react-syntax-highlighter": "^15.6.1",
    "rehype-sanitize": "^6.0.0",
    "svix": "^1.62.0",
    "tailwind-merge": "^2.2.1",
    "tailwindcss-animate": "^1.0.7",
    "uuid": "^11.1.0",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@tailwindcss/forms": "^0.5.10",
    "@tailwindcss/typography": "^0.5.16",
    "@types/jest": "^29.5.14",
    "@types/node": "^20.11.24",
    "@types/react": "^18.2.56",
    "@types/react-dom": "^18.2.19",
    "@types/react-syntax-highlighter": "^15.5.13",
    "@typescript-eslint/eslint-plugin": "^7.0.2",
    "@typescript-eslint/parser": "^7.0.2",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.17",
    "esbuild": "^0.25.1",
    "eslint": "^8.56.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "jest": "^29.7.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.3.3",
    "vite": "^5.1.4"
  }
}



================================================
FILE: pnpm-lock.yaml
================================================
lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

importers:

  .:
    dependencies:
      '@clerk/clerk-react':
        specifier: ^4.30.6
        version: 4.32.5(react@18.3.1)
      '@clerk/themes':
        specifier: ^1.7.9
        version: 1.7.20(react@18.3.1)
      '@emotion/react':
        specifier: ^11.14.0
        version: 11.14.0(@types/react@18.3.18)(react@18.3.1)
      '@emotion/styled':
        specifier: ^11.14.0
        version: 11.14.0(@emotion/react@11.14.0(@types/react@18.3.18)(react@18.3.1))(@types/react@18.3.18)(react@18.3.1)
      '@hookform/resolvers':
        specifier: ^4.1.3
        version: 4.1.3(react-hook-form@7.54.2(react@18.3.1))
      '@monaco-editor/react':
        specifier: ^4.7.0
        version: 4.7.0(monaco-editor@0.52.2)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@mui/icons-material':
        specifier: ^6.4.8
        version: 6.4.8(@mui/material@6.4.8(@emotion/react@11.14.0(@types/react@18.3.18)(react@18.3.1))(@emotion/styled@11.14.0(@emotion/react@11.14.0(@types/react@18.3.18)(react@18.3.1))(@types/react@18.3.18)(react@18.3.1))(@types/react@18.3.18)(react-dom@18.3.1(react@18.3.1))(react@18.3.1))(@types/react@18.3.18)(react@18.3.1)
      '@mui/material':
        specifier: ^6.4.8
        version: 6.4.8(@emotion/react@11.14.0(@types/react@18.3.18)(react@18.3.1))(@emotion/styled@11.14.0(@emotion/react@11.14.0(@types/react@18.3.18)(react@18.3.1))(@types/react@18.3.18)(react@18.3.1))(@types/react@18.3.18)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@prisma/client':
        specifier: ^6.5.0
        version: 6.5.0(typescript@5.8.2)
      '@radix-ui/react-alert-dialog':
        specifier: ^1.1.6
        version: 1.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-checkbox':
        specifier: ^1.0.4
        version: 1.1.4(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-dialog':
        specifier: ^1.0.5
        version: 1.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-dropdown-menu':
        specifier: ^2.0.6
        version: 2.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-label':
        specifier: ^2.1.2
        version: 2.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-popover':
        specifier: ^1.1.6
        version: 1.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-select':
        specifier: ^2.1.6
        version: 2.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-separator':
        specifier: ^1.1.2
        version: 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-slot':
        specifier: ^1.1.2
        version: 1.1.2(@types/react@18.3.18)(react@18.3.1)
      '@radix-ui/react-switch':
        specifier: ^1.1.3
        version: 1.1.3(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-tabs':
        specifier: ^1.1.3
        version: 1.1.3(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-toast':
        specifier: ^1.1.5
        version: 1.2.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@supabase/supabase-js':
        specifier: ^2.39.7
        version: 2.49.1(bufferutil@4.0.9)(utf-8-validate@5.0.10)
      '@tanstack/react-query':
        specifier: ^5.69.0
        version: 5.69.0(react@18.3.1)
      '@tanstack/react-query-devtools':
        specifier: ^5.69.0
        version: 5.69.0(@tanstack/react-query@5.69.0(react@18.3.1))(react@18.3.1)
      '@types/node-schedule':
        specifier: ^2.1.7
        version: 2.1.7
      '@types/node-telegram-bot-api':
        specifier: ^0.64.8
        version: 0.64.8
      '@uiw/react-md-editor':
        specifier: ^4.0.3
        version: 4.0.5(@types/react@18.3.18)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      axios:
        specifier: ^1.8.4
        version: 1.8.4
      class-variance-authority:
        specifier: ^0.7.1
        version: 0.7.1
      clsx:
        specifier: ^2.1.0
        version: 2.1.1
      coinbase-commerce:
        specifier: ^1.1.0
        version: 1.1.0
      date-fns:
        specifier: ^4.1.0
        version: 4.1.0
      dotenv:
        specifier: ^16.4.7
        version: 16.4.7
      form-data:
        specifier: ^4.0.2
        version: 4.0.2
      framer-motion:
        specifier: ^11.0.8
        version: 11.18.2(@emotion/is-prop-valid@1.3.1)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      lucide-react:
        specifier: ^0.344.0
        version: 0.344.0(react@18.3.1)
      next:
        specifier: ^15.2.3
        version: 15.2.3(@babel/core@7.26.9)(babel-plugin-macros@3.1.0)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      node-schedule:
        specifier: ^2.1.1
        version: 2.1.1
      node-telegram-bot-api:
        specifier: ^0.66.0
        version: 0.66.0(request@2.88.2)
      pdf-lib:
        specifier: ^1.17.1
        version: 1.17.1
      react:
        specifier: ^18.2.0
        version: 18.3.1
      react-dom:
        specifier: ^18.2.0
        version: 18.3.1(react@18.3.1)
      react-dropzone:
        specifier: ^14.3.8
        version: 14.3.8(react@18.3.1)
      react-error-boundary:
        specifier: ^5.0.0
        version: 5.0.0(react@18.3.1)
      react-helmet-async:
        specifier: ^2.0.4
        version: 2.0.5(react@18.3.1)
      react-hook-form:
        specifier: ^7.54.2
        version: 7.54.2(react@18.3.1)
      react-hot-toast:
        specifier: ^2.4.1
        version: 2.5.2(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      react-icons:
        specifier: ^5.5.0
        version: 5.5.0(react@18.3.1)
      react-markdown:
        specifier: ^10.1.0
        version: 10.1.0(@types/react@18.3.18)(react@18.3.1)
      react-router-dom:
        specifier: ^6.22.2
        version: 6.30.0(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      react-syntax-highlighter:
        specifier: ^15.6.1
        version: 15.6.1(react@18.3.1)
      rehype-sanitize:
        specifier: ^6.0.0
        version: 6.0.0
      svix:
        specifier: ^1.62.0
        version: 1.62.0
      tailwind-merge:
        specifier: ^2.2.1
        version: 2.6.0
      tailwindcss-animate:
        specifier: ^1.0.7
        version: 1.0.7(tailwindcss@3.4.17)
      uuid:
        specifier: ^11.1.0
        version: 11.1.0
      zod:
        specifier: ^3.24.2
        version: 3.24.2
    devDependencies:
      '@tailwindcss/forms':
        specifier: ^0.5.10
        version: 0.5.10(tailwindcss@3.4.17)
      '@tailwindcss/typography':
        specifier: ^0.5.16
        version: 0.5.16(tailwindcss@3.4.17)
      '@types/jest':
        specifier: ^29.5.14
        version: 29.5.14
      '@types/node':
        specifier: ^20.11.24
        version: 20.17.24
      '@types/react':
        specifier: ^18.2.56
        version: 18.3.18
      '@types/react-dom':
        specifier: ^18.2.19
        version: 18.3.5(@types/react@18.3.18)
      '@types/react-syntax-highlighter':
        specifier: ^15.5.13
        version: 15.5.13
      '@typescript-eslint/eslint-plugin':
        specifier: ^7.0.2
        version: 7.18.0(@typescript-eslint/parser@7.18.0(eslint@8.57.1)(typescript@5.8.2))(eslint@8.57.1)(typescript@5.8.2)
      '@typescript-eslint/parser':
        specifier: ^7.0.2
        version: 7.18.0(eslint@8.57.1)(typescript@5.8.2)
      '@vitejs/plugin-react':
        specifier: ^4.2.1
        version: 4.3.4(vite@5.4.14(@types/node@20.17.24)(terser@5.39.0))
      autoprefixer:
        specifier: ^10.4.17
        version: 10.4.20(postcss@8.5.3)
      esbuild:
        specifier: ^0.25.1
        version: 0.25.1
      eslint:
        specifier: ^8.56.0
        version: 8.57.1
      eslint-plugin-react-hooks:
        specifier: ^4.6.0
        version: 4.6.2(eslint@8.57.1)
      eslint-plugin-react-refresh:
        specifier: ^0.4.5
        version: 0.4.19(eslint@8.57.1)
      jest:
        specifier: ^29.7.0
        version: 29.7.0(@types/node@20.17.24)(babel-plugin-macros@3.1.0)
      postcss:
        specifier: ^8.4.35
        version: 8.5.3
      tailwindcss:
        specifier: ^3.4.1
        version: 3.4.17
      typescript:
        specifier: ^5.3.3
        version: 5.8.2
      vite:
        specifier: ^5.1.4
        version: 5.4.14(@types/node@20.17.24)(terser@5.39.0)

packages:

  '@alloc/quick-lru@5.2.0':
    resolution: {integrity: sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==}
    engines: {node: '>=10'}

  '@ampproject/remapping@2.3.0':
    resolution: {integrity: sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw==}
    engines: {node: '>=6.0.0'}

  '@babel/code-frame@7.26.2':
    resolution: {integrity: sha512-RJlIHRueQgwWitWgF8OdFYGZX328Ax5BCemNGlqHfplnRT9ESi8JkFlvaVYbS+UubVY6dpv87Fs2u5M29iNFVQ==}
    engines: {node: '>=6.9.0'}

  '@babel/compat-data@7.26.8':
    resolution: {integrity: sha512-oH5UPLMWR3L2wEFLnFJ1TZXqHufiTKAiLfqw5zkhS4dKXLJ10yVztfil/twG8EDTA4F/tvVNw9nOl4ZMslB8rQ==}
    engines: {node: '>=6.9.0'}

  '@babel/core@7.26.9':
    resolution: {integrity: sha512-lWBYIrF7qK5+GjY5Uy+/hEgp8OJWOD/rpy74GplYRhEauvbHDeFB8t5hPOZxCZ0Oxf4Cc36tK51/l3ymJysrKw==}
    engines: {node: '>=6.9.0'}

  '@babel/generator@7.26.9':
    resolution: {integrity: sha512-kEWdzjOAUMW4hAyrzJ0ZaTOu9OmpyDIQicIh0zg0EEcEkYXZb2TjtBhnHi2ViX7PKwZqF4xwqfAm299/QMP3lg==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-compilation-targets@7.26.5':
    resolution: {integrity: sha512-IXuyn5EkouFJscIDuFF5EsiSolseme1s0CZB+QxVugqJLYmKdxI1VfIBOst0SUu4rnk2Z7kqTwmoO1lp3HIfnA==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-module-imports@7.25.9':
    resolution: {integrity: sha512-tnUA4RsrmflIM6W6RFTLFSXITtl0wKjgpnLgXyowocVPrbYrLUXSBXDgTs8BlbmIzIdlBySRQjINYs2BAkiLtw==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-module-transforms@7.26.0':
    resolution: {integrity: sha512-xO+xu6B5K2czEnQye6BHA7DolFFmS3LB7stHZFaOLb1pAwO1HWLS8fXA+eh0A2yIvltPVmx3eNNDBJA2SLHXFw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/helper-plugin-utils@7.26.5':
    resolution: {integrity: sha512-RS+jZcRdZdRFzMyr+wcsaqOmld1/EqTghfaBGQQd/WnRdzdlvSZ//kF7U8VQTxf1ynZ4cjUcYgjVGx13ewNPMg==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-string-parser@7.25.9':
    resolution: {integrity: sha512-4A/SCr/2KLd5jrtOMFzaKjVtAei3+2r/NChoBNoZ3EyP/+GlhoaEGoWOZUmFmoITP7zOJyHIMm+DYRd8o3PvHA==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-validator-identifier@7.25.9':
    resolution: {integrity: sha512-Ed61U6XJc3CVRfkERJWDz4dJwKe7iLmmJsbOGu9wSloNSFttHV0I8g6UAgb7qnK5ly5bGLPd4oXZlxCdANBOWQ==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-validator-option@7.25.9':
    resolution: {integrity: sha512-e/zv1co8pp55dNdEcCynfj9X7nyUKUXoUEwfXqaZt0omVOmDe9oOTdKStH4GmAw6zxMFs50ZayuMfHDKlO7Tfw==}
    engines: {node: '>=6.9.0'}

  '@babel/helpers@7.26.9':
    resolution: {integrity: sha512-Mz/4+y8udxBKdmzt/UjPACs4G3j5SshJJEFFKxlCGPydG4JAHXxjWjAwjd09tf6oINvl1VfMJo+nB7H2YKQ0dA==}
    engines: {node: '>=6.9.0'}

  '@babel/parser@7.26.9':
    resolution: {integrity: sha512-81NWa1njQblgZbQHxWHpxxCzNsa3ZwvFqpUg7P+NNUU6f3UU2jBEg4OlF/J6rl8+PQGh1q6/zWScd001YwcA5A==}
    engines: {node: '>=6.0.0'}
    hasBin: true

  '@babel/plugin-syntax-async-generators@7.8.4':
    resolution: {integrity: sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-bigint@7.8.3':
    resolution: {integrity: sha512-wnTnFlG+YxQm3vDxpGE57Pj0srRU4sHE/mDkt1qv2YJJSeUAec2ma4WLUnUPeKjyrfntVwe/N6dCXpU+zL3Npg==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-class-properties@7.12.13':
    resolution: {integrity: sha512-fm4idjKla0YahUNgFNLCB0qySdsoPiZP3iQE3rky0mBUtMZ23yDJ9SJdg6dXTSDnulOVqiF3Hgr9nbXvXTQZYA==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-class-static-block@7.14.5':
    resolution: {integrity: sha512-b+YyPmr6ldyNnM6sqYeMWE+bgJcJpO6yS4QD7ymxgH34GBPNDM/THBh8iunyvKIZztiwLH4CJZ0RxTk9emgpjw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-import-attributes@7.26.0':
    resolution: {integrity: sha512-e2dttdsJ1ZTpi3B9UYGLw41hifAubg19AtCu/2I/F1QNVclOBr1dYpTdmdyZ84Xiz43BS/tCUkMAZNLv12Pi+A==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-import-meta@7.10.4':
    resolution: {integrity: sha512-Yqfm+XDx0+Prh3VSeEQCPU81yC+JWZ2pDPFSS4ZdpfZhp4MkFMaDC1UqseovEKwSUpnIL7+vK+Clp7bfh0iD7g==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-json-strings@7.8.3':
    resolution: {integrity: sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-jsx@7.25.9':
    resolution: {integrity: sha512-ld6oezHQMZsZfp6pWtbjaNDF2tiiCYYDqQszHt5VV437lewP9aSi2Of99CK0D0XB21k7FLgnLcmQKyKzynfeAA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-logical-assignment-operators@7.10.4':
    resolution: {integrity: sha512-d8waShlpFDinQ5MtvGU9xDAOzKH47+FFoney2baFIoMr952hKOLp1HR7VszoZvOsV/4+RRszNY7D17ba0te0ig==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-nullish-coalescing-operator@7.8.3':
    resolution: {integrity: sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-numeric-separator@7.10.4':
    resolution: {integrity: sha512-9H6YdfkcK/uOnY/K7/aA2xpzaAgkQn37yzWUMRK7OaPOqOpGS1+n0H5hxT9AUw9EsSjPW8SVyMJwYRtWs3X3ug==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-object-rest-spread@7.8.3':
    resolution: {integrity: sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-optional-catch-binding@7.8.3':
    resolution: {integrity: sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-optional-chaining@7.8.3':
    resolution: {integrity: sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-private-property-in-object@7.14.5':
    resolution: {integrity: sha512-0wVnp9dxJ72ZUJDV27ZfbSj6iHLoytYZmh3rFcxNnvsJF3ktkzLDZPy/mA17HGsaQT3/DQsWYX1f1QGWkCoVUg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-top-level-await@7.14.5':
    resolution: {integrity: sha512-hx++upLv5U1rgYfwe1xBQUhRmU41NEvpUvrp8jkrSCdvGSnM5/qdRMtylJ6PG5OFkBaHkbTAKTnd3/YyESRHFw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-typescript@7.25.9':
    resolution: {integrity: sha512-hjMgRy5hb8uJJjUcdWunWVcoi9bGpJp8p5Ol1229PoN6aytsLwNMgmdftO23wnCLMfVmTwZDWMPNq/D1SY60JQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-react-jsx-self@7.25.9':
    resolution: {integrity: sha512-y8quW6p0WHkEhmErnfe58r7x0A70uKphQm8Sp8cV7tjNQwK56sNVK0M73LK3WuYmsuyrftut4xAkjjgU0twaMg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-react-jsx-source@7.25.9':
    resolution: {integrity: sha512-+iqjT8xmXhhYv4/uiYd8FNQsraMFZIfxVSqxxVSZP0WbbSAWvBXAul0m/zu+7Vv4O/3WtApy9pmaTMiumEZgfg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/runtime@7.26.9':
    resolution: {integrity: sha512-aA63XwOkcl4xxQa3HjPMqOP6LiK0ZDv3mUPYEFXkpHbaFjtGggE1A61FjFzJnB+p7/oy2gA8E+rcBNl/zC1tMg==}
    engines: {node: '>=6.9.0'}

  '@babel/template@7.26.9':
    resolution: {integrity: sha512-qyRplbeIpNZhmzOysF/wFMuP9sctmh2cFzRAZOn1YapxBsE1i9bJIY586R/WBLfLcmcBlM8ROBiQURnnNy+zfA==}
    engines: {node: '>=6.9.0'}

  '@babel/traverse@7.26.9':
    resolution: {integrity: sha512-ZYW7L+pL8ahU5fXmNbPF+iZFHCv5scFak7MZ9bwaRPLUhHh7QQEMjZUg0HevihoqCM5iSYHN61EyCoZvqC+bxg==}
    engines: {node: '>=6.9.0'}

  '@babel/types@7.26.9':
    resolution: {integrity: sha512-Y3IR1cRnOxOCDvMmNiym7XpXQ93iGDDPHx+Zj+NM+rg0fBaShfQLkg+hKPaZCEvg5N/LeCo4+Rj/i3FuJsIQaw==}
    engines: {node: '>=6.9.0'}

  '@bcoe/v8-coverage@0.2.3':
    resolution: {integrity: sha512-0hYQ8SB4Db5zvZB4axdMHGwEaQjkZzFjQiN9LVYvIFB2nSUHW9tYpxWriPrWDASIxiaXax83REcLxuSdnGPZtw==}

  '@clerk/clerk-react@4.32.5':
    resolution: {integrity: sha512-fb4NyJ2bRGxWWlbyVo1geYInzsuaOqTXInFQLPfNDFaF+Ztpl9FZyfvT5V+Ka5YoUJzbEq/v/Y5zGvFIJS0F9w==}
    engines: {node: '>=14'}
    peerDependencies:
      react: '>=16'

  '@clerk/shared@1.4.2':
    resolution: {integrity: sha512-R+OkzCtnNU7sn/F6dBfdY5lKs84TN785VZdBBefmyr7zsXcFEqbCcfQzyvgtIS28Ln5SifFEBoAyYR334IXO8w==}
    peerDependencies:
      react: '>=16'
    peerDependenciesMeta:
      react:
        optional: true

  '@clerk/themes@1.7.20':
    resolution: {integrity: sha512-RGDWnm3HtPCAo0zPg44Ezp6z4uC2GCKRIEg8o56NoQzflmpxnrWnzu0QL38E+P0zDY9oZBx9lY7V3hLj9y9jVw==}
    engines: {node: '>=14'}
    peerDependencies:
      react: '>=16'

  '@clerk/types@3.65.5':
    resolution: {integrity: sha512-RGO8v2a52Ybo1jwVj42UWT8VKyxAk/qOxrkA3VNIYBNEajPSmZNa9r9MTgqSgZRyz1XTlQHdVb7UK7q78yAGfA==}
    engines: {node: '>=14'}

  '@cypress/request-promise@5.0.0':
    resolution: {integrity: sha512-eKdYVpa9cBEw2kTBlHeu1PP16Blwtum6QHg/u9s/MoHkZfuo1pRGka1VlUHXF5kdew82BvOJVVGk0x8X0nbp+w==}
    engines: {node: '>=0.10.0'}
    peerDependencies:
      '@cypress/request': ^3.0.0

  '@cypress/request@3.0.8':
    resolution: {integrity: sha512-h0NFgh1mJmm1nr4jCwkGHwKneVYKghUyWe6TMNrk0B9zsjAJxpg8C4/+BAcmLgCPa1vj1V8rNUaILl+zYRUWBQ==}
    engines: {node: '>= 6'}

  '@emnapi/runtime@1.3.1':
    resolution: {integrity: sha512-kEBmG8KyqtxJZv+ygbEim+KCGtIq1fC22Ms3S4ziXmYKm8uyoLX0MHONVKwp+9opg390VaKRNt4a7A9NwmpNhw==}

  '@emotion/babel-plugin@11.13.5':
    resolution: {integrity: sha512-pxHCpT2ex+0q+HH91/zsdHkw/lXd468DIN2zvfvLtPKLLMo6gQj7oLObq8PhkrxOZb/gGCq03S3Z7PDhS8pduQ==}

  '@emotion/cache@11.14.0':
    resolution: {integrity: sha512-L/B1lc/TViYk4DcpGxtAVbx0ZyiKM5ktoIyafGkH6zg/tj+mA+NE//aPYKG0k8kCHSHVJrpLpcAlOBEXQ3SavA==}

  '@emotion/hash@0.9.2':
    resolution: {integrity: sha512-MyqliTZGuOm3+5ZRSaaBGP3USLw6+EGykkwZns2EPC5g8jJ4z9OrdZY9apkl3+UP9+sdz76YYkwCKP5gh8iY3g==}

  '@emotion/is-prop-valid@1.3.1':
    resolution: {integrity: sha512-/ACwoqx7XQi9knQs/G0qKvv5teDMhD7bXYns9N/wM8ah8iNb8jZ2uNO0YOgiq2o2poIvVtJS2YALasQuMSQ7Kw==}

  '@emotion/memoize@0.9.0':
    resolution: {integrity: sha512-30FAj7/EoJ5mwVPOWhAyCX+FPfMDrVecJAM+Iw9NRoSl4BBAQeqj4cApHHUXOVvIPgLVDsCFoz/hGD+5QQD1GQ==}

  '@emotion/react@11.14.0':
    resolution: {integrity: sha512-O000MLDBDdk/EohJPFUqvnp4qnHeYkVP5B0xEG0D/L7cOKP9kefu2DXn8dj74cQfsEzUqh+sr1RzFqiL1o+PpA==}
    peerDependencies:
      '@types/react': '*'
      react: '>=16.8.0'
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@emotion/serialize@1.3.3':
    resolution: {integrity: sha512-EISGqt7sSNWHGI76hC7x1CksiXPahbxEOrC5RjmFRJTqLyEK9/9hZvBbiYn70dw4wuwMKiEMCUlR6ZXTSWQqxA==}

  '@emotion/sheet@1.4.0':
    resolution: {integrity: sha512-fTBW9/8r2w3dXWYM4HCB1Rdp8NLibOw2+XELH5m5+AkWiL/KqYX6dc0kKYlaYyKjrQ6ds33MCdMPEwgs2z1rqg==}

  '@emotion/styled@11.14.0':
    resolution: {integrity: sha512-XxfOnXFffatap2IyCeJyNov3kiDQWoR08gPUQxvbL7fxKryGBKUZUkG6Hz48DZwVrJSVh9sJboyV1Ds4OW6SgA==}
    peerDependencies:
      '@emotion/react': ^11.0.0-rc.0
      '@types/react': '*'
      react: '>=16.8.0'
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@emotion/unitless@0.10.0':
    resolution: {integrity: sha512-dFoMUuQA20zvtVTuxZww6OHoJYgrzfKM1t52mVySDJnMSEa08ruEvdYQbhvyu6soU+NeLVd3yKfTfT0NeV6qGg==}

  '@emotion/use-insertion-effect-with-fallbacks@1.2.0':
    resolution: {integrity: sha512-yJMtVdH59sxi/aVJBpk9FQq+OR8ll5GT8oWd57UpeaKEVGab41JWaCFA7FRLoMLloOZF/c/wsPoe+bfGmRKgDg==}
    peerDependencies:
      react: '>=16.8.0'

  '@emotion/utils@1.4.2':
    resolution: {integrity: sha512-3vLclRofFziIa3J2wDh9jjbkUz9qk5Vi3IZ/FSTKViB0k+ef0fPV7dYrUIugbgupYDx7v9ud/SjrtEP8Y4xLoA==}

  '@emotion/weak-memoize@0.4.0':
    resolution: {integrity: sha512-snKqtPW01tN0ui7yu9rGv69aJXr/a/Ywvl11sUjNtEcRc+ng/mQriFL0wLXMef74iHa/EkftbDzU9F8iFbH+zg==}

  '@esbuild/aix-ppc64@0.21.5':
    resolution: {integrity: sha512-1SDgH6ZSPTlggy1yI6+Dbkiz8xzpHJEVAlF/AM1tHPLsf5STom9rwtjE4hKAF20FfXXNTFqEYXyJNWh1GiZedQ==}
    engines: {node: '>=12'}
    cpu: [ppc64]
    os: [aix]

  '@esbuild/aix-ppc64@0.25.1':
    resolution: {integrity: sha512-kfYGy8IdzTGy+z0vFGvExZtxkFlA4zAxgKEahG9KE1ScBjpQnFsNOX8KTU5ojNru5ed5CVoJYXFtoxaq5nFbjQ==}
    engines: {node: '>=18'}
    cpu: [ppc64]
    os: [aix]

  '@esbuild/android-arm64@0.21.5':
    resolution: {integrity: sha512-c0uX9VAUBQ7dTDCjq+wdyGLowMdtR/GoC2U5IYk/7D1H1JYC0qseD7+11iMP2mRLN9RcCMRcjC4YMclCzGwS/A==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [android]

  '@esbuild/android-arm64@0.25.1':
    resolution: {integrity: sha512-50tM0zCJW5kGqgG7fQ7IHvQOcAn9TKiVRuQ/lN0xR+T2lzEFvAi1ZcS8DiksFcEpf1t/GYOeOfCAgDHFpkiSmA==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [android]

  '@esbuild/android-arm@0.21.5':
    resolution: {integrity: sha512-vCPvzSjpPHEi1siZdlvAlsPxXl7WbOVUBBAowWug4rJHb68Ox8KualB+1ocNvT5fjv6wpkX6o/iEpbDrf68zcg==}
    engines: {node: '>=12'}
    cpu: [arm]
    os: [android]

  '@esbuild/android-arm@0.25.1':
    resolution: {integrity: sha512-dp+MshLYux6j/JjdqVLnMglQlFu+MuVeNrmT5nk6q07wNhCdSnB7QZj+7G8VMUGh1q+vj2Bq8kRsuyA00I/k+Q==}
    engines: {node: '>=18'}
    cpu: [arm]
    os: [android]

  '@esbuild/android-x64@0.21.5':
    resolution: {integrity: sha512-D7aPRUUNHRBwHxzxRvp856rjUHRFW1SdQATKXH2hqA0kAZb1hKmi02OpYRacl0TxIGz/ZmXWlbZgjwWYaCakTA==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [android]

  '@esbuild/android-x64@0.25.1':
    resolution: {integrity: sha512-GCj6WfUtNldqUzYkN/ITtlhwQqGWu9S45vUXs7EIYf+7rCiiqH9bCloatO9VhxsL0Pji+PF4Lz2XXCES+Q8hDw==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [android]

  '@esbuild/darwin-arm64@0.21.5':
    resolution: {integrity: sha512-DwqXqZyuk5AiWWf3UfLiRDJ5EDd49zg6O9wclZ7kUMv2WRFr4HKjXp/5t8JZ11QbQfUS6/cRCKGwYhtNAY88kQ==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [darwin]

  '@esbuild/darwin-arm64@0.25.1':
    resolution: {integrity: sha512-5hEZKPf+nQjYoSr/elb62U19/l1mZDdqidGfmFutVUjjUZrOazAtwK+Kr+3y0C/oeJfLlxo9fXb1w7L+P7E4FQ==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [darwin]

  '@esbuild/darwin-x64@0.21.5':
    resolution: {integrity: sha512-se/JjF8NlmKVG4kNIuyWMV/22ZaerB+qaSi5MdrXtd6R08kvs2qCN4C09miupktDitvh8jRFflwGFBQcxZRjbw==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [darwin]

  '@esbuild/darwin-x64@0.25.1':
    resolution: {integrity: sha512-hxVnwL2Dqs3fM1IWq8Iezh0cX7ZGdVhbTfnOy5uURtao5OIVCEyj9xIzemDi7sRvKsuSdtCAhMKarxqtlyVyfA==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [darwin]

  '@esbuild/freebsd-arm64@0.21.5':
    resolution: {integrity: sha512-5JcRxxRDUJLX8JXp/wcBCy3pENnCgBR9bN6JsY4OmhfUtIHe3ZW0mawA7+RDAcMLrMIZaf03NlQiX9DGyB8h4g==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [freebsd]

  '@esbuild/freebsd-arm64@0.25.1':
    resolution: {integrity: sha512-1MrCZs0fZa2g8E+FUo2ipw6jw5qqQiH+tERoS5fAfKnRx6NXH31tXBKI3VpmLijLH6yriMZsxJtaXUyFt/8Y4A==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [freebsd]

  '@esbuild/freebsd-x64@0.21.5':
    resolution: {integrity: sha512-J95kNBj1zkbMXtHVH29bBriQygMXqoVQOQYA+ISs0/2l3T9/kj42ow2mpqerRBxDJnmkUDCaQT/dfNXWX/ZZCQ==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [freebsd]

  '@esbuild/freebsd-x64@0.25.1':
    resolution: {integrity: sha512-0IZWLiTyz7nm0xuIs0q1Y3QWJC52R8aSXxe40VUxm6BB1RNmkODtW6LHvWRrGiICulcX7ZvyH6h5fqdLu4gkww==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [freebsd]

  '@esbuild/linux-arm64@0.21.5':
    resolution: {integrity: sha512-ibKvmyYzKsBeX8d8I7MH/TMfWDXBF3db4qM6sy+7re0YXya+K1cem3on9XgdT2EQGMu4hQyZhan7TeQ8XkGp4Q==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [linux]

  '@esbuild/linux-arm64@0.25.1':
    resolution: {integrity: sha512-jaN3dHi0/DDPelk0nLcXRm1q7DNJpjXy7yWaWvbfkPvI+7XNSc/lDOnCLN7gzsyzgu6qSAmgSvP9oXAhP973uQ==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [linux]

  '@esbuild/linux-arm@0.21.5':
    resolution: {integrity: sha512-bPb5AHZtbeNGjCKVZ9UGqGwo8EUu4cLq68E95A53KlxAPRmUyYv2D6F0uUI65XisGOL1hBP5mTronbgo+0bFcA==}
    engines: {node: '>=12'}
    cpu: [arm]
    os: [linux]

  '@esbuild/linux-arm@0.25.1':
    resolution: {integrity: sha512-NdKOhS4u7JhDKw9G3cY6sWqFcnLITn6SqivVArbzIaf3cemShqfLGHYMx8Xlm/lBit3/5d7kXvriTUGa5YViuQ==}
    engines: {node: '>=18'}
    cpu: [arm]
    os: [linux]

  '@esbuild/linux-ia32@0.21.5':
    resolution: {integrity: sha512-YvjXDqLRqPDl2dvRODYmmhz4rPeVKYvppfGYKSNGdyZkA01046pLWyRKKI3ax8fbJoK5QbxblURkwK/MWY18Tg==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [linux]

  '@esbuild/linux-ia32@0.25.1':
    resolution: {integrity: sha512-OJykPaF4v8JidKNGz8c/q1lBO44sQNUQtq1KktJXdBLn1hPod5rE/Hko5ugKKZd+D2+o1a9MFGUEIUwO2YfgkQ==}
    engines: {node: '>=18'}
    cpu: [ia32]
    os: [linux]

  '@esbuild/linux-loong64@0.21.5':
    resolution: {integrity: sha512-uHf1BmMG8qEvzdrzAqg2SIG/02+4/DHB6a9Kbya0XDvwDEKCoC8ZRWI5JJvNdUjtciBGFQ5PuBlpEOXQj+JQSg==}
    engines: {node: '>=12'}
    cpu: [loong64]
    os: [linux]

  '@esbuild/linux-loong64@0.25.1':
    resolution: {integrity: sha512-nGfornQj4dzcq5Vp835oM/o21UMlXzn79KobKlcs3Wz9smwiifknLy4xDCLUU0BWp7b/houtdrgUz7nOGnfIYg==}
    engines: {node: '>=18'}
    cpu: [loong64]
    os: [linux]

  '@esbuild/linux-mips64el@0.21.5':
    resolution: {integrity: sha512-IajOmO+KJK23bj52dFSNCMsz1QP1DqM6cwLUv3W1QwyxkyIWecfafnI555fvSGqEKwjMXVLokcV5ygHW5b3Jbg==}
    engines: {node: '>=12'}
    cpu: [mips64el]
    os: [linux]

  '@esbuild/linux-mips64el@0.25.1':
    resolution: {integrity: sha512-1osBbPEFYwIE5IVB/0g2X6i1qInZa1aIoj1TdL4AaAb55xIIgbg8Doq6a5BzYWgr+tEcDzYH67XVnTmUzL+nXg==}
    engines: {node: '>=18'}
    cpu: [mips64el]
    os: [linux]

  '@esbuild/linux-ppc64@0.21.5':
    resolution: {integrity: sha512-1hHV/Z4OEfMwpLO8rp7CvlhBDnjsC3CttJXIhBi+5Aj5r+MBvy4egg7wCbe//hSsT+RvDAG7s81tAvpL2XAE4w==}
    engines: {node: '>=12'}
    cpu: [ppc64]
    os: [linux]

  '@esbuild/linux-ppc64@0.25.1':
    resolution: {integrity: sha512-/6VBJOwUf3TdTvJZ82qF3tbLuWsscd7/1w+D9LH0W/SqUgM5/JJD0lrJ1fVIfZsqB6RFmLCe0Xz3fmZc3WtyVg==}
    engines: {node: '>=18'}
    cpu: [ppc64]
    os: [linux]

  '@esbuild/linux-riscv64@0.21.5':
    resolution: {integrity: sha512-2HdXDMd9GMgTGrPWnJzP2ALSokE/0O5HhTUvWIbD3YdjME8JwvSCnNGBnTThKGEB91OZhzrJ4qIIxk/SBmyDDA==}
    engines: {node: '>=12'}
    cpu: [riscv64]
    os: [linux]

  '@esbuild/linux-riscv64@0.25.1':
    resolution: {integrity: sha512-nSut/Mx5gnilhcq2yIMLMe3Wl4FK5wx/o0QuuCLMtmJn+WeWYoEGDN1ipcN72g1WHsnIbxGXd4i/MF0gTcuAjQ==}
    engines: {node: '>=18'}
    cpu: [riscv64]
    os: [linux]

  '@esbuild/linux-s390x@0.21.5':
    resolution: {integrity: sha512-zus5sxzqBJD3eXxwvjN1yQkRepANgxE9lgOW2qLnmr8ikMTphkjgXu1HR01K4FJg8h1kEEDAqDcZQtbrRnB41A==}
    engines: {node: '>=12'}
    cpu: [s390x]
    os: [linux]

  '@esbuild/linux-s390x@0.25.1':
    resolution: {integrity: sha512-cEECeLlJNfT8kZHqLarDBQso9a27o2Zd2AQ8USAEoGtejOrCYHNtKP8XQhMDJMtthdF4GBmjR2au3x1udADQQQ==}
    engines: {node: '>=18'}
    cpu: [s390x]
    os: [linux]

  '@esbuild/linux-x64@0.21.5':
    resolution: {integrity: sha512-1rYdTpyv03iycF1+BhzrzQJCdOuAOtaqHTWJZCWvijKD2N5Xu0TtVC8/+1faWqcP9iBCWOmjmhoH94dH82BxPQ==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [linux]

  '@esbuild/linux-x64@0.25.1':
    resolution: {integrity: sha512-xbfUhu/gnvSEg+EGovRc+kjBAkrvtk38RlerAzQxvMzlB4fXpCFCeUAYzJvrnhFtdeyVCDANSjJvOvGYoeKzFA==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [linux]

  '@esbuild/netbsd-arm64@0.25.1':
    resolution: {integrity: sha512-O96poM2XGhLtpTh+s4+nP7YCCAfb4tJNRVZHfIE7dgmax+yMP2WgMd2OecBuaATHKTHsLWHQeuaxMRnCsH8+5g==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [netbsd]

  '@esbuild/netbsd-x64@0.21.5':
    resolution: {integrity: sha512-Woi2MXzXjMULccIwMnLciyZH4nCIMpWQAs049KEeMvOcNADVxo0UBIQPfSmxB3CWKedngg7sWZdLvLczpe0tLg==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [netbsd]

  '@esbuild/netbsd-x64@0.25.1':
    resolution: {integrity: sha512-X53z6uXip6KFXBQ+Krbx25XHV/NCbzryM6ehOAeAil7X7oa4XIq+394PWGnwaSQ2WRA0KI6PUO6hTO5zeF5ijA==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [netbsd]

  '@esbuild/openbsd-arm64@0.25.1':
    resolution: {integrity: sha512-Na9T3szbXezdzM/Kfs3GcRQNjHzM6GzFBeU1/6IV/npKP5ORtp9zbQjvkDJ47s6BCgaAZnnnu/cY1x342+MvZg==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [openbsd]

  '@esbuild/openbsd-x64@0.21.5':
    resolution: {integrity: sha512-HLNNw99xsvx12lFBUwoT8EVCsSvRNDVxNpjZ7bPn947b8gJPzeHWyNVhFsaerc0n3TsbOINvRP2byTZ5LKezow==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [openbsd]

  '@esbuild/openbsd-x64@0.25.1':
    resolution: {integrity: sha512-T3H78X2h1tszfRSf+txbt5aOp/e7TAz3ptVKu9Oyir3IAOFPGV6O9c2naym5TOriy1l0nNf6a4X5UXRZSGX/dw==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [openbsd]

  '@esbuild/sunos-x64@0.21.5':
    resolution: {integrity: sha512-6+gjmFpfy0BHU5Tpptkuh8+uw3mnrvgs+dSPQXQOv3ekbordwnzTVEb4qnIvQcYXq6gzkyTnoZ9dZG+D4garKg==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [sunos]

  '@esbuild/sunos-x64@0.25.1':
    resolution: {integrity: sha512-2H3RUvcmULO7dIE5EWJH8eubZAI4xw54H1ilJnRNZdeo8dTADEZ21w6J22XBkXqGJbe0+wnNJtw3UXRoLJnFEg==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [sunos]

  '@esbuild/win32-arm64@0.21.5':
    resolution: {integrity: sha512-Z0gOTd75VvXqyq7nsl93zwahcTROgqvuAcYDUr+vOv8uHhNSKROyU961kgtCD1e95IqPKSQKH7tBTslnS3tA8A==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [win32]

  '@esbuild/win32-arm64@0.25.1':
    resolution: {integrity: sha512-GE7XvrdOzrb+yVKB9KsRMq+7a2U/K5Cf/8grVFRAGJmfADr/e/ODQ134RK2/eeHqYV5eQRFxb1hY7Nr15fv1NQ==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [win32]

  '@esbuild/win32-ia32@0.21.5':
    resolution: {integrity: sha512-SWXFF1CL2RVNMaVs+BBClwtfZSvDgtL//G/smwAc5oVK/UPu2Gu9tIaRgFmYFFKrmg3SyAjSrElf0TiJ1v8fYA==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [win32]

  '@esbuild/win32-ia32@0.25.1':
    resolution: {integrity: sha512-uOxSJCIcavSiT6UnBhBzE8wy3n0hOkJsBOzy7HDAuTDE++1DJMRRVCPGisULScHL+a/ZwdXPpXD3IyFKjA7K8A==}
    engines: {node: '>=18'}
    cpu: [ia32]
    os: [win32]

  '@esbuild/win32-x64@0.21.5':
    resolution: {integrity: sha512-tQd/1efJuzPC6rCFwEvLtci/xNFcTZknmXs98FYDfGE4wP9ClFV98nyKrzJKVPMhdDnjzLhdUyMX4PsQAPjwIw==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [win32]

  '@esbuild/win32-x64@0.25.1':
    resolution: {integrity: sha512-Y1EQdcfwMSeQN/ujR5VayLOJ1BHaK+ssyk0AEzPjC+t1lITgsnccPqFjb6V+LsTp/9Iov4ysfjxLaGJ9RPtkVg==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [win32]

  '@eslint-community/eslint-utils@4.4.1':
    resolution: {integrity: sha512-s3O3waFUrMV8P/XaF/+ZTp1X9XBZW1a4B97ZnjQF2KYWaFD2A8KyFBsrsfSjEmjn3RGWAIuvlneuZm3CUK3jbA==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || >=8.0.0

  '@eslint-community/regexpp@4.12.1':
    resolution: {integrity: sha512-CCZCDJuduB9OUkFkY2IgppNZMi2lBQgD2qzwXkEia16cge2pijY/aXi96CJMquDMn3nJdlPV1A5KrJEXwfLNzQ==}
    engines: {node: ^12.0.0 || ^14.0.0 || >=16.0.0}

  '@eslint/eslintrc@2.1.4':
    resolution: {integrity: sha512-269Z39MS6wVJtsoUl10L60WdkhJVdPG24Q4eZTH3nnF6lpvSShEK3wQjDX9JRWAUPvPh7COouPpU9IrqaZFvtQ==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}

  '@eslint/js@8.57.1':
    resolution: {integrity: sha512-d9zaMRSTIKDLhctzH12MtXvJKSSUhaHcjV+2Z+GK+EEY7XKpP5yR4x+N3TAcHTcu963nIr+TMcCb4DBCYX1z6Q==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}

  '@floating-ui/core@1.6.9':
    resolution: {integrity: sha512-uMXCuQ3BItDUbAMhIXw7UPXRfAlOAvZzdK9BWpE60MCn+Svt3aLn9jsPTi/WNGlRUu2uI0v5S7JiIUsbsvh3fw==}

  '@floating-ui/dom@1.6.13':
    resolution: {integrity: sha512-umqzocjDgNRGTuO7Q8CU32dkHkECqI8ZdMZ5Swb6QAM0t5rnlrN3lGo1hdpscRd3WS8T6DKYK4ephgIH9iRh3w==}

  '@floating-ui/react-dom@2.1.2':
    resolution: {integrity: sha512-06okr5cgPzMNBy+Ycse2A6udMi4bqwW/zgBF/rwjcNqWkyr82Mcg8b0vjX8OJpZFy/FKjJmw6wV7t44kK6kW7A==}
    peerDependencies:
      react: '>=16.8.0'
      react-dom: '>=16.8.0'

  '@floating-ui/utils@0.2.9':
    resolution: {integrity: sha512-MDWhGtE+eHw5JW7lq4qhc5yRLS11ERl1c7Z6Xd0a58DozHES6EnNNwUWbMiG4J9Cgj053Bhk8zvlhFYKVhULwg==}

  '@hookform/resolvers@4.1.3':
    resolution: {integrity: sha512-Jsv6UOWYTrEFJ/01ZrnwVXs7KDvP8XIo115i++5PWvNkNvkrsTfGiLS6w+eJ57CYtUtDQalUWovCZDHFJ8u1VQ==}
    peerDependencies:
      react-hook-form: ^7.0.0

  '@humanwhocodes/config-array@0.13.0':
    resolution: {integrity: sha512-DZLEEqFWQFiyK6h5YIeynKx7JlvCYWL0cImfSRXZ9l4Sg2efkFGTuFf6vzXjK1cq6IYkU+Eg/JizXw+TD2vRNw==}
    engines: {node: '>=10.10.0'}
    deprecated: Use @eslint/config-array instead

  '@humanwhocodes/module-importer@1.0.1':
    resolution: {integrity: sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==}
    engines: {node: '>=12.22'}

  '@humanwhocodes/object-schema@2.0.3':
    resolution: {integrity: sha512-93zYdMES/c1D69yZiKDBj0V24vqNzB/koF26KPaagAfd3P/4gUlh3Dys5ogAK+Exi9QyzlD8x/08Zt7wIKcDcA==}
    deprecated: Use @eslint/object-schema instead

  '@img/sharp-darwin-arm64@0.33.5':
    resolution: {integrity: sha512-UT4p+iz/2H4twwAoLCqfA9UH5pI6DggwKEGuaPy7nCVQ8ZsiY5PIcrRvD1DzuY3qYL07NtIQcWnBSY/heikIFQ==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm64]
    os: [darwin]

  '@img/sharp-darwin-x64@0.33.5':
    resolution: {integrity: sha512-fyHac4jIc1ANYGRDxtiqelIbdWkIuQaI84Mv45KvGRRxSAa7o7d1ZKAOBaYbnepLC1WqxfpimdeWfvqqSGwR2Q==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [x64]
    os: [darwin]

  '@img/sharp-libvips-darwin-arm64@1.0.4':
    resolution: {integrity: sha512-XblONe153h0O2zuFfTAbQYAX2JhYmDHeWikp1LM9Hul9gVPjFY427k6dFEcOL72O01QxQsWi761svJ/ev9xEDg==}
    cpu: [arm64]
    os: [darwin]

  '@img/sharp-libvips-darwin-x64@1.0.4':
    resolution: {integrity: sha512-xnGR8YuZYfJGmWPvmlunFaWJsb9T/AO2ykoP3Fz/0X5XV2aoYBPkX6xqCQvUTKKiLddarLaxpzNe+b1hjeWHAQ==}
    cpu: [x64]
    os: [darwin]

  '@img/sharp-libvips-linux-arm64@1.0.4':
    resolution: {integrity: sha512-9B+taZ8DlyyqzZQnoeIvDVR/2F4EbMepXMc/NdVbkzsJbzkUjhXv/70GQJ7tdLA4YJgNP25zukcxpX2/SueNrA==}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-libvips-linux-arm@1.0.5':
    resolution: {integrity: sha512-gvcC4ACAOPRNATg/ov8/MnbxFDJqf/pDePbBnuBDcjsI8PssmjoKMAz4LtLaVi+OnSb5FK/yIOamqDwGmXW32g==}
    cpu: [arm]
    os: [linux]

  '@img/sharp-libvips-linux-s390x@1.0.4':
    resolution: {integrity: sha512-u7Wz6ntiSSgGSGcjZ55im6uvTrOxSIS8/dgoVMoiGE9I6JAfU50yH5BoDlYA1tcuGS7g/QNtetJnxA6QEsCVTA==}
    cpu: [s390x]
    os: [linux]

  '@img/sharp-libvips-linux-x64@1.0.4':
    resolution: {integrity: sha512-MmWmQ3iPFZr0Iev+BAgVMb3ZyC4KeFc3jFxnNbEPas60e1cIfevbtuyf9nDGIzOaW9PdnDciJm+wFFaTlj5xYw==}
    cpu: [x64]
    os: [linux]

  '@img/sharp-libvips-linuxmusl-arm64@1.0.4':
    resolution: {integrity: sha512-9Ti+BbTYDcsbp4wfYib8Ctm1ilkugkA/uscUn6UXK1ldpC1JjiXbLfFZtRlBhjPZ5o1NCLiDbg8fhUPKStHoTA==}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-libvips-linuxmusl-x64@1.0.4':
    resolution: {integrity: sha512-viYN1KX9m+/hGkJtvYYp+CCLgnJXwiQB39damAO7WMdKWlIhmYTfHjwSbQeUK/20vY154mwezd9HflVFM1wVSw==}
    cpu: [x64]
    os: [linux]

  '@img/sharp-linux-arm64@0.33.5':
    resolution: {integrity: sha512-JMVv+AMRyGOHtO1RFBiJy/MBsgz0x4AWrT6QoEVVTyh1E39TrCUpTRI7mx9VksGX4awWASxqCYLCV4wBZHAYxA==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-linux-arm@0.33.5':
    resolution: {integrity: sha512-JTS1eldqZbJxjvKaAkxhZmBqPRGmxgu+qFKSInv8moZ2AmT5Yib3EQ1c6gp493HvrvV8QgdOXdyaIBrhvFhBMQ==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm]
    os: [linux]

  '@img/sharp-linux-s390x@0.33.5':
    resolution: {integrity: sha512-y/5PCd+mP4CA/sPDKl2961b+C9d+vPAveS33s6Z3zfASk2j5upL6fXVPZi7ztePZ5CuH+1kW8JtvxgbuXHRa4Q==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [s390x]
    os: [linux]

  '@img/sharp-linux-x64@0.33.5':
    resolution: {integrity: sha512-opC+Ok5pRNAzuvq1AG0ar+1owsu842/Ab+4qvU879ippJBHvyY5n2mxF1izXqkPYlGuP/M556uh53jRLJmzTWA==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [x64]
    os: [linux]

  '@img/sharp-linuxmusl-arm64@0.33.5':
    resolution: {integrity: sha512-XrHMZwGQGvJg2V/oRSUfSAfjfPxO+4DkiRh6p2AFjLQztWUuY/o8Mq0eMQVIY7HJ1CDQUJlxGGZRw1a5bqmd1g==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-linuxmusl-x64@0.33.5':
    resolution: {integrity: sha512-WT+d/cgqKkkKySYmqoZ8y3pxx7lx9vVejxW/W4DOFMYVSkErR+w7mf2u8m/y4+xHe7yY9DAXQMWQhpnMuFfScw==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [x64]
    os: [linux]

  '@img/sharp-wasm32@0.33.5':
    resolution: {integrity: sha512-ykUW4LVGaMcU9lu9thv85CbRMAwfeadCJHRsg2GmeRa/cJxsVY9Rbd57JcMxBkKHag5U/x7TSBpScF4U8ElVzg==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [wasm32]

  '@img/sharp-win32-ia32@0.33.5':
    resolution: {integrity: sha512-T36PblLaTwuVJ/zw/LaH0PdZkRz5rd3SmMHX8GSmR7vtNSP5Z6bQkExdSK7xGWyxLw4sUknBuugTelgw2faBbQ==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [ia32]
    os: [win32]

  '@img/sharp-win32-x64@0.33.5':
    resolution: {integrity: sha512-MpY/o8/8kj+EcnxwvrP4aTJSWw/aZ7JIGR4aBeZkZw5B7/Jn+tY9/VNwtcoGmdT7GfggGIU4kygOMSbYnOrAbg==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [x64]
    os: [win32]

  '@isaacs/cliui@8.0.2':
    resolution: {integrity: sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==}
    engines: {node: '>=12'}

  '@istanbuljs/load-nyc-config@1.1.0':
    resolution: {integrity: sha512-VjeHSlIzpv/NyD3N0YuHfXOPDIixcA1q2ZV98wsMqcYlPmv2n3Yb2lYP9XMElnaFVXg5A7YLTeLu6V84uQDjmQ==}
    engines: {node: '>=8'}

  '@istanbuljs/schema@0.1.3':
    resolution: {integrity: sha512-ZXRY4jNvVgSVQ8DL3LTcakaAtXwTVUxE81hslsyD2AtoXW/wVob10HkOJ1X/pAlcI7D+2YoZKg5do8G/w6RYgA==}
    engines: {node: '>=8'}

  '@jest/console@29.7.0':
    resolution: {integrity: sha512-5Ni4CU7XHQi32IJ398EEP4RrB8eV09sXP2ROqD4bksHrnTree52PsxvX8tpL8LvTZ3pFzXyPbNQReSN41CAhOg==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/core@29.7.0':
    resolution: {integrity: sha512-n7aeXWKMnGtDA48y8TLWJPJmLmmZ642Ceo78cYWEpiD7FzDgmNDV/GCVRorPABdXLJZ/9wzzgZAlHjXjxDHGsg==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true

  '@jest/environment@29.7.0':
    resolution: {integrity: sha512-aQIfHDq33ExsN4jP1NWGXhxgQ/wixs60gDiKO+XVMd8Mn0NWPWgc34ZQDTb2jKaUWQ7MuwoitXAsN2XVXNMpAw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/expect-utils@29.7.0':
    resolution: {integrity: sha512-GlsNBWiFQFCVi9QVSx7f5AgMeLxe9YCCs5PuP2O2LdjDAA8Jh9eX7lA1Jq/xdXw3Wb3hyvlFNfZIfcRetSzYcA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/expect@29.7.0':
    resolution: {integrity: sha512-8uMeAMycttpva3P1lBHB8VciS9V0XAr3GymPpipdyQXbBcuhkLQOSe8E/p92RyAdToS6ZD1tFkX+CkhoECE0dQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/fake-timers@29.7.0':
    resolution: {integrity: sha512-q4DH1Ha4TTFPdxLsqDXK1d3+ioSL7yL5oCMJZgDYm6i+6CygW5E5xVr/D1HdsGxjt1ZWSfUAs9OxSB/BNelWrQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/globals@29.7.0':
    resolution: {integrity: sha512-mpiz3dutLbkW2MNFubUGUEVLkTGiqW6yLVTA+JbP6fI6J5iL9Y0Nlg8k95pcF8ctKwCS7WVxteBs29hhfAotzQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/reporters@29.7.0':
    resolution: {integrity: sha512-DApq0KJbJOEzAFYjHADNNxAE3KbhxQB1y5Kplb5Waqw6zVbuWatSnMjE5gs8FUgEPmNsnZA3NCWl9NG0ia04Pg==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true

  '@jest/schemas@29.6.3':
    resolution: {integrity: sha512-mo5j5X+jIZmJQveBKeS/clAueipV7KgiX1vMgCxam1RNYiqE1w62n0/tJJnHtjW8ZHcQco5gY85jA3mi0L+nSA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/source-map@29.6.3':
    resolution: {integrity: sha512-MHjT95QuipcPrpLM+8JMSzFx6eHp5Bm+4XeFDJlwsvVBjmKNiIAvasGK2fxz2WbGRlnvqehFbh07MMa7n3YJnw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/test-result@29.7.0':
    resolution: {integrity: sha512-Fdx+tv6x1zlkJPcWXmMDAG2HBnaR9XPSd5aDWQVsfrZmLVT3lU1cwyxLgRmXR9yrq4NBoEm9BMsfgFzTQAbJYA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/test-sequencer@29.7.0':
    resolution: {integrity: sha512-GQwJ5WZVrKnOJuiYiAF52UNUJXgTZx1NHjFSEB0qEMmSZKAkdMoIzw/Cj6x6NF4AvV23AUqDpFzQkN/eYCYTxw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/transform@29.7.0':
    resolution: {integrity: sha512-ok/BTPFzFKVMwO5eOHRrvnBVHdRy9IrsrW1GpMaQ9MCnilNLXQKmAX8s1YXDFaai9xJpac2ySzV0YeRRECr2Vw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/types@29.6.3':
    resolution: {integrity: sha512-u3UPsIilWKOM3F9CXtrG8LEJmNxwoCQC/XVj4IKYXvvpx7QIi/Kg1LI5uDmDpKlac62NUtX7eLjRh+jVZcLOzw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jridgewell/gen-mapping@0.3.8':
    resolution: {integrity: sha512-imAbBGkb+ebQyxKgzv5Hu2nmROxoDOXHh80evxdoXNOrvAnVx7zimzc1Oo5h9RlfV4vPXaE2iM5pOFbvOCClWA==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/resolve-uri@3.1.2':
    resolution: {integrity: sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/set-array@1.2.1':
    resolution: {integrity: sha512-R8gLRTZeyp03ymzP/6Lil/28tGeGEzhx1q2k703KGWRAI1VdvPIXdG70VJc2pAMw3NA6JKL5hhFu1sJX0Mnn/A==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/source-map@0.3.6':
    resolution: {integrity: sha512-1ZJTZebgqllO79ue2bm3rIGud/bOe0pP5BjSRCRxxYkEZS8STV7zN84UBbiYu7jy+eCKSnVIUgoWWE/tt+shMQ==}

  '@jridgewell/sourcemap-codec@1.5.0':
    resolution: {integrity: sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==}

  '@jridgewell/trace-mapping@0.3.25':
    resolution: {integrity: sha512-vNk6aEwybGtawWmy/PzwnGDOjCkLWSD2wqvjGGAgOAwCGWySYXfYoxt00IJkTF+8Lb57DwOb3Aa0o9CApepiYQ==}

  '@monaco-editor/loader@1.5.0':
    resolution: {integrity: sha512-hKoGSM+7aAc7eRTRjpqAZucPmoNOC4UUbknb/VNoTkEIkCPhqV8LfbsgM1webRM7S/z21eHEx9Fkwx8Z/C/+Xw==}

  '@monaco-editor/react@4.7.0':
    resolution: {integrity: sha512-cyzXQCtO47ydzxpQtCGSQGOC8Gk3ZUeBXFAxD+CWXYFo5OqZyZUonFl0DwUlTyAfRHntBfw2p3w4s9R6oe1eCA==}
    peerDependencies:
      monaco-editor: '>= 0.25.0 < 1'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0
      react-dom: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0

  '@mui/core-downloads-tracker@6.4.8':
    resolution: {integrity: sha512-vjP4+A1ybyCRhDZC7r5EPWu/gLseFZxaGyPdDl94vzVvk6Yj6gahdaqcjbhkaCrJjdZj90m3VioltWPAnWF/zw==}

  '@mui/icons-material@6.4.8':
    resolution: {integrity: sha512-LKGWiLWRyoOw3dWxZQ+lV//mK+4DVTTAiLd2ljmJdD6XV0rDB8JFKjRD9nyn9cJAU5XgWnii7ZR3c93ttUnMKg==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      '@mui/material': ^6.4.8
      '@types/react': ^17.0.0 || ^18.0.0 || ^19.0.0
      react: ^17.0.0 || ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@mui/material@6.4.8':
    resolution: {integrity: sha512-5S9UTjKZZBd9GfbcYh/nYfD9cv6OXmj5Y7NgKYfk7JcSoshp8/pW5zP4wecRiroBSZX8wcrywSgogpVNO+5W0Q==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      '@emotion/react': ^11.5.0
      '@emotion/styled': ^11.3.0
      '@mui/material-pigment-css': ^6.4.8
      '@types/react': ^17.0.0 || ^18.0.0 || ^19.0.0
      react: ^17.0.0 || ^18.0.0 || ^19.0.0
      react-dom: ^17.0.0 || ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@emotion/react':
        optional: true
      '@emotion/styled':
        optional: true
      '@mui/material-pigment-css':
        optional: true
      '@types/react':
        optional: true

  '@mui/private-theming@6.4.8':
    resolution: {integrity: sha512-sWwQoNSn6elsPTAtSqCf+w5aaGoh7AASURNmpy+QTTD/zwJ0Jgwt0ZaaP6mXq2IcgHxYnYloM/+vJgHPMkRKTQ==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      '@types/react': ^17.0.0 || ^18.0.0 || ^19.0.0
      react: ^17.0.0 || ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@mui/styled-engine@6.4.8':
    resolution: {integrity: sha512-oyjx1b1FvUCI85ZMO4trrjNxGm90eLN3Ohy0AP/SqK5gWvRQg1677UjNf7t6iETOKAleHctJjuq0B3aXO2gtmw==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      '@emotion/react': ^11.4.1
      '@emotion/styled': ^11.3.0
      react: ^17.0.0 || ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@emotion/react':
        optional: true
      '@emotion/styled':
        optional: true

  '@mui/system@6.4.8':
    resolution: {integrity: sha512-gV7iBHoqlsIenU2BP0wq14BefRoZcASZ/4LeyuQglayBl+DfLX5rEd3EYR3J409V2EZpR0NOM1LATAGlNk2cyA==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      '@emotion/react': ^11.5.0
      '@emotion/styled': ^11.3.0
      '@types/react': ^17.0.0 || ^18.0.0 || ^19.0.0
      react: ^17.0.0 || ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@emotion/react':
        optional: true
      '@emotion/styled':
        optional: true
      '@types/react':
        optional: true

  '@mui/types@7.2.24':
    resolution: {integrity: sha512-3c8tRt/CbWZ+pEg7QpSwbdxOk36EfmhbKf6AGZsD1EcLDLTSZoxxJ86FVtcjxvjuhdyBiWKSTGZFaXCnidO2kw==}
    peerDependencies:
      '@types/react': ^17.0.0 || ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@mui/utils@6.4.8':
    resolution: {integrity: sha512-C86gfiZ5BfZ51KqzqoHi1WuuM2QdSKoFhbkZeAfQRB+jCc4YNhhj11UXFVMMsqBgZ+Zy8IHNJW3M9Wj/LOwRXQ==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      '@types/react': ^17.0.0 || ^18.0.0 || ^19.0.0
      react: ^17.0.0 || ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@next/env@15.2.3':
    resolution: {integrity: sha512-a26KnbW9DFEUsSxAxKBORR/uD9THoYoKbkpFywMN/AFvboTt94b8+g/07T8J6ACsdLag8/PDU60ov4rPxRAixw==}

  '@next/swc-darwin-arm64@15.2.3':
    resolution: {integrity: sha512-uaBhA8aLbXLqwjnsHSkxs353WrRgQgiFjduDpc7YXEU0B54IKx3vU+cxQlYwPCyC8uYEEX7THhtQQsfHnvv8dw==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [darwin]

  '@next/swc-darwin-x64@15.2.3':
    resolution: {integrity: sha512-pVwKvJ4Zk7h+4hwhqOUuMx7Ib02u3gDX3HXPKIShBi9JlYllI0nU6TWLbPT94dt7FSi6mSBhfc2JrHViwqbOdw==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [darwin]

  '@next/swc-linux-arm64-gnu@15.2.3':
    resolution: {integrity: sha512-50ibWdn2RuFFkOEUmo9NCcQbbV9ViQOrUfG48zHBCONciHjaUKtHcYFiCwBVuzD08fzvzkWuuZkd4AqbvKO7UQ==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]

  '@next/swc-linux-arm64-musl@15.2.3':
    resolution: {integrity: sha512-2gAPA7P652D3HzR4cLyAuVYwYqjG0mt/3pHSWTCyKZq/N/dJcUAEoNQMyUmwTZWCJRKofB+JPuDVP2aD8w2J6Q==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]

  '@next/swc-linux-x64-gnu@15.2.3':
    resolution: {integrity: sha512-ODSKvrdMgAJOVU4qElflYy1KSZRM3M45JVbeZu42TINCMG3anp7YCBn80RkISV6bhzKwcUqLBAmOiWkaGtBA9w==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]

  '@next/swc-linux-x64-musl@15.2.3':
    resolution: {integrity: sha512-ZR9kLwCWrlYxwEoytqPi1jhPd1TlsSJWAc+H/CJHmHkf2nD92MQpSRIURR1iNgA/kuFSdxB8xIPt4p/T78kwsg==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]

  '@next/swc-win32-arm64-msvc@15.2.3':
    resolution: {integrity: sha512-+G2FrDcfm2YDbhDiObDU/qPriWeiz/9cRR0yMWJeTLGGX6/x8oryO3tt7HhodA1vZ8r2ddJPCjtLcpaVl7TE2Q==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [win32]

  '@next/swc-win32-x64-msvc@15.2.3':
    resolution: {integrity: sha512-gHYS9tc+G2W0ZC8rBL+H6RdtXIyk40uLiaos0yj5US85FNhbFEndMA2nW3z47nzOWiSvXTZ5kBClc3rD0zJg0w==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [win32]

  '@nodelib/fs.scandir@2.1.5':
    resolution: {integrity: sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==}
    engines: {node: '>= 8'}

  '@nodelib/fs.stat@2.0.5':
    resolution: {integrity: sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==}
    engines: {node: '>= 8'}

  '@nodelib/fs.walk@1.2.8':
    resolution: {integrity: sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==}
    engines: {node: '>= 8'}

  '@pdf-lib/standard-fonts@1.0.0':
    resolution: {integrity: sha512-hU30BK9IUN/su0Mn9VdlVKsWBS6GyhVfqjwl1FjZN4TxP6cCw0jP2w7V3Hf5uX7M0AZJ16vey9yE0ny7Sa59ZA==}

  '@pdf-lib/upng@1.0.1':
    resolution: {integrity: sha512-dQK2FUMQtowVP00mtIksrlZhdFXQZPC+taih1q4CvPZ5vqdxR/LKBaFg0oAfzd1GlHZXXSPdQfzQnt+ViGvEIQ==}

  '@pkgjs/parseargs@0.11.0':
    resolution: {integrity: sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==}
    engines: {node: '>=14'}

  '@popperjs/core@2.11.8':
    resolution: {integrity: sha512-P1st0aksCrn9sGZhp8GMYwBnQsbvAWsZAX44oXNNvLHGqAOcoVxmjZiohstwQ7SqKnbR47akdNi+uleWD8+g6A==}

  '@prisma/client@6.5.0':
    resolution: {integrity: sha512-M6w1Ql/BeiGoZmhMdAZUXHu5sz5HubyVcKukbLs3l0ELcQb8hTUJxtGEChhv4SVJ0QJlwtLnwOLgIRQhpsm9dw==}
    engines: {node: '>=18.18'}
    peerDependencies:
      prisma: '*'
      typescript: '>=5.1.0'
    peerDependenciesMeta:
      prisma:
        optional: true
      typescript:
        optional: true

  '@radix-ui/number@1.1.0':
    resolution: {integrity: sha512-V3gRzhVNU1ldS5XhAPTom1fOIo4ccrjjJgmE+LI2h/WaFpHmx0MQApT+KZHnx8abG6Avtfcz4WoEciMnpFT3HQ==}

  '@radix-ui/primitive@1.1.1':
    resolution: {integrity: sha512-SJ31y+Q/zAyShtXJc8x83i9TYdbAfHZ++tUZnvjJJqFjzsdUnKsxPL6IEtBlxKkU7yzer//GQtZSV4GbldL3YA==}

  '@radix-ui/react-alert-dialog@1.1.6':
    resolution: {integrity: sha512-p4XnPqgej8sZAAReCAKgz1REYZEBLR8hU9Pg27wFnCWIMc8g1ccCs0FjBcy05V15VTu8pAePw/VDYeOm/uZ6yQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-arrow@1.1.2':
    resolution: {integrity: sha512-G+KcpzXHq24iH0uGG/pF8LyzpFJYGD4RfLjCIBfGdSLXvjLHST31RUiRVrupIBMvIppMgSzQ6l66iAxl03tdlg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-checkbox@1.1.4':
    resolution: {integrity: sha512-wP0CPAHq+P5I4INKe3hJrIa1WoNqqrejzW+zoU0rOvo1b9gDEJJFl2rYfO1PYJUQCc2H1WZxIJmyv9BS8i5fLw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-collection@1.1.2':
    resolution: {integrity: sha512-9z54IEKRxIa9VityapoEYMuByaG42iSy1ZXlY2KcuLSEtq8x4987/N6m15ppoMffgZX72gER2uHe1D9Y6Unlcw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-compose-refs@1.1.1':
    resolution: {integrity: sha512-Y9VzoRDSJtgFMUCoiZBDVo084VQ5hfpXxVE+NgkdNsjiDBByiImMZKKhxMwCbdHvhlENG6a833CbFkOQvTricw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-context@1.1.1':
    resolution: {integrity: sha512-UASk9zi+crv9WteK/NU4PLvOoL3OuE6BWVKNF6hPRBtYBDXQ2u5iu3O59zUlJiTVvkyuycnqrztsHVJwcK9K+Q==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-dialog@1.1.6':
    resolution: {integrity: sha512-/IVhJV5AceX620DUJ4uYVMymzsipdKBzo3edo+omeskCKGm9FRHM0ebIdbPnlQVJqyuHbuBltQUOG2mOTq2IYw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-direction@1.1.0':
    resolution: {integrity: sha512-BUuBvgThEiAXh2DWu93XsT+a3aWrGqolGlqqw5VU1kG7p/ZH2cuDlM1sRLNnY3QcBS69UIz2mcKhMxDsdewhjg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-dismissable-layer@1.1.5':
    resolution: {integrity: sha512-E4TywXY6UsXNRhFrECa5HAvE5/4BFcGyfTyK36gP+pAW1ed7UTK4vKwdr53gAJYwqbfCWC6ATvJa3J3R/9+Qrg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-dropdown-menu@2.1.6':
    resolution: {integrity: sha512-no3X7V5fD487wab/ZYSHXq3H37u4NVeLDKI/Ks724X/eEFSSEFYZxWgsIlr1UBeEyDaM29HM5x9p1Nv8DuTYPA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-focus-guards@1.1.1':
    resolution: {integrity: sha512-pSIwfrT1a6sIoDASCSpFwOasEwKTZWDw/iBdtnqKO7v6FeOzYJ7U53cPzYFVR3geGGXgVHaH+CdngrrAzqUGxg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-focus-scope@1.1.2':
    resolution: {integrity: sha512-zxwE80FCU7lcXUGWkdt6XpTTCKPitG1XKOwViTxHVKIJhZl9MvIl2dVHeZENCWD9+EdWv05wlaEkRXUykU27RA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-id@1.1.0':
    resolution: {integrity: sha512-EJUrI8yYh7WOjNOqpoJaf1jlFIH2LvtgAl+YcFqNCa+4hj64ZXmPkAKOFs/ukjz3byN6bdb/AVUqHkI8/uWWMA==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-label@2.1.2':
    resolution: {integrity: sha512-zo1uGMTaNlHehDyFQcDZXRJhUPDuukcnHz0/jnrup0JA6qL+AFpAnty+7VKa9esuU5xTblAZzTGYJKSKaBxBhw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-menu@2.1.6':
    resolution: {integrity: sha512-tBBb5CXDJW3t2mo9WlO7r6GTmWV0F0uzHZVFmlRmYpiSK1CDU5IKojP1pm7oknpBOrFZx/YgBRW9oorPO2S/Lg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-popover@1.1.6':
    resolution: {integrity: sha512-NQouW0x4/GnkFJ/pRqsIS3rM/k97VzKnVb2jB7Gq7VEGPy5g7uNV1ykySFt7eWSp3i2uSGFwaJcvIRJBAHmmFg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-popper@1.2.2':
    resolution: {integrity: sha512-Rvqc3nOpwseCyj/rgjlJDYAgyfw7OC1tTkKn2ivhaMGcYt8FSBlahHOZak2i3QwkRXUXgGgzeEe2RuqeEHuHgA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-portal@1.1.4':
    resolution: {integrity: sha512-sn2O9k1rPFYVyKd5LAJfo96JlSGVFpa1fS6UuBJfrZadudiw5tAmru+n1x7aMRQ84qDM71Zh1+SzK5QwU0tJfA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-presence@1.1.2':
    resolution: {integrity: sha512-18TFr80t5EVgL9x1SwF/YGtfG+l0BS0PRAlCWBDoBEiDQjeKgnNZRVJp/oVBl24sr3Gbfwc/Qpj4OcWTQMsAEg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-primitive@2.0.2':
    resolution: {integrity: sha512-Ec/0d38EIuvDF+GZjcMU/Ze6MxntVJYO/fRlCPhCaVUyPY9WTalHJw54tp9sXeJo3tlShWpy41vQRgLRGOuz+w==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-roving-focus@1.1.2':
    resolution: {integrity: sha512-zgMQWkNO169GtGqRvYrzb0Zf8NhMHS2DuEB/TiEmVnpr5OqPU3i8lfbxaAmC2J/KYuIQxyoQQ6DxepyXp61/xw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-select@2.1.6':
    resolution: {integrity: sha512-T6ajELxRvTuAMWH0YmRJ1qez+x4/7Nq7QIx7zJ0VK3qaEWdnWpNbEDnmWldG1zBDwqrLy5aLMUWcoGirVj5kMg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-separator@1.1.2':
    resolution: {integrity: sha512-oZfHcaAp2Y6KFBX6I5P1u7CQoy4lheCGiYj+pGFrHy8E/VNRb5E39TkTr3JrV520csPBTZjkuKFdEsjS5EUNKQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-slot@1.1.2':
    resolution: {integrity: sha512-YAKxaiGsSQJ38VzKH86/BPRC4rh+b1Jpa+JneA5LRE7skmLPNAyeG8kPJj/oo4STLvlrs8vkf/iYyc3A5stYCQ==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-switch@1.1.3':
    resolution: {integrity: sha512-1nc+vjEOQkJVsJtWPSiISGT6OKm4SiOdjMo+/icLxo2G4vxz1GntC5MzfL4v8ey9OEfw787QCD1y3mUv0NiFEQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-tabs@1.1.3':
    resolution: {integrity: sha512-9mFyI30cuRDImbmFF6O2KUJdgEOsGh9Vmx9x/Dh9tOhL7BngmQPQfwW4aejKm5OHpfWIdmeV6ySyuxoOGjtNng==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-toast@1.2.6':
    resolution: {integrity: sha512-gN4dpuIVKEgpLn1z5FhzT9mYRUitbfZq9XqN/7kkBMUgFTzTG8x/KszWJugJXHcwxckY8xcKDZPz7kG3o6DsUA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-use-callback-ref@1.1.0':
    resolution: {integrity: sha512-CasTfvsy+frcFkbXtSJ2Zu9JHpN8TYKxkgJGWbjiZhFivxaeW7rMeZt7QELGVLaYVfFMsKHjb7Ak0nMEe+2Vfw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-controllable-state@1.1.0':
    resolution: {integrity: sha512-MtfMVJiSr2NjzS0Aa90NPTnvTSg6C/JLCV7ma0W6+OMV78vd8OyRpID+Ng9LxzsPbLeuBnWBA1Nq30AtBIDChw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-escape-keydown@1.1.0':
    resolution: {integrity: sha512-L7vwWlR1kTTQ3oh7g1O0CBF3YCyyTj8NmhLR+phShpyA50HCfBFKVJTpshm9PzLiKmehsrQzTYTpX9HvmC9rhw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-layout-effect@1.1.0':
    resolution: {integrity: sha512-+FPE0rOdziWSrH9athwI1R0HDVbWlEhd+FR+aSDk4uWGmSJ9Z54sdZVDQPZAinJhJXwfT+qnj969mCsT2gfm5w==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-previous@1.1.0':
    resolution: {integrity: sha512-Z/e78qg2YFnnXcW88A4JmTtm4ADckLno6F7OXotmkQfeuCVaKuYzqAATPhVzl3delXE7CxIV8shofPn3jPc5Og==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-rect@1.1.0':
    resolution: {integrity: sha512-0Fmkebhr6PiseyZlYAOtLS+nb7jLmpqTrJyv61Pe68MKYW6OWdRE2kI70TaYY27u7H0lajqM3hSMMLFq18Z7nQ==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-size@1.1.0':
    resolution: {integrity: sha512-XW3/vWuIXHa+2Uwcc2ABSfcCledmXhhQPlGbfcRXbiUQI5Icjcg19BGCZVKKInYbvUCut/ufbbLLPFC5cbb1hw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-visually-hidden@1.1.2':
    resolution: {integrity: sha512-1SzA4ns2M1aRlvxErqhLHsBHoS5eI5UUcI2awAMgGUp4LoaoWOKYmvqDY2s/tltuPkh3Yk77YF/r3IRj+Amx4Q==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/rect@1.1.0':
    resolution: {integrity: sha512-A9+lCBZoaMJlVKcRBz2YByCG+Cp2t6nAnMnNba+XiWxnj6r4JUFqfsgwocMBZU9LPtdxC6wB56ySYpc7LQIoJg==}

  '@remix-run/router@1.23.0':
    resolution: {integrity: sha512-O3rHJzAQKamUz1fvE0Qaw0xSFqsA/yafi2iqeE0pvdFtCO1viYx8QL6f3Ln/aCCTLxs68SLf0KPM9eSeM8yBnA==}
    engines: {node: '>=14.0.0'}

  '@rollup/rollup-android-arm-eabi@4.36.0':
    resolution: {integrity: sha512-jgrXjjcEwN6XpZXL0HUeOVGfjXhPyxAbbhD0BlXUB+abTOpbPiN5Wb3kOT7yb+uEtATNYF5x5gIfwutmuBA26w==}
    cpu: [arm]
    os: [android]

  '@rollup/rollup-android-arm64@4.36.0':
    resolution: {integrity: sha512-NyfuLvdPdNUfUNeYKUwPwKsE5SXa2J6bCt2LdB/N+AxShnkpiczi3tcLJrm5mA+eqpy0HmaIY9F6XCa32N5yzg==}
    cpu: [arm64]
    os: [android]

  '@rollup/rollup-darwin-arm64@4.36.0':
    resolution: {integrity: sha512-JQ1Jk5G4bGrD4pWJQzWsD8I1n1mgPXq33+/vP4sk8j/z/C2siRuxZtaUA7yMTf71TCZTZl/4e1bfzwUmFb3+rw==}
    cpu: [arm64]
    os: [darwin]

  '@rollup/rollup-darwin-x64@4.36.0':
    resolution: {integrity: sha512-6c6wMZa1lrtiRsbDziCmjE53YbTkxMYhhnWnSW8R/yqsM7a6mSJ3uAVT0t8Y/DGt7gxUWYuFM4bwWk9XCJrFKA==}
    cpu: [x64]
    os: [darwin]

  '@rollup/rollup-freebsd-arm64@4.36.0':
    resolution: {integrity: sha512-KXVsijKeJXOl8QzXTsA+sHVDsFOmMCdBRgFmBb+mfEb/7geR7+C8ypAml4fquUt14ZyVXaw2o1FWhqAfOvA4sg==}
    cpu: [arm64]
    os: [freebsd]

  '@rollup/rollup-freebsd-x64@4.36.0':
    resolution: {integrity: sha512-dVeWq1ebbvByI+ndz4IJcD4a09RJgRYmLccwlQ8bPd4olz3Y213uf1iwvc7ZaxNn2ab7bjc08PrtBgMu6nb4pQ==}
    cpu: [x64]
    os: [freebsd]

  '@rollup/rollup-linux-arm-gnueabihf@4.36.0':
    resolution: {integrity: sha512-bvXVU42mOVcF4le6XSjscdXjqx8okv4n5vmwgzcmtvFdifQ5U4dXFYaCB87namDRKlUL9ybVtLQ9ztnawaSzvg==}
    cpu: [arm]
    os: [linux]

  '@rollup/rollup-linux-arm-musleabihf@4.36.0':
    resolution: {integrity: sha512-JFIQrDJYrxOnyDQGYkqnNBtjDwTgbasdbUiQvcU8JmGDfValfH1lNpng+4FWlhaVIR4KPkeddYjsVVbmJYvDcg==}
    cpu: [arm]
    os: [linux]

  '@rollup/rollup-linux-arm64-gnu@4.36.0':
    resolution: {integrity: sha512-KqjYVh3oM1bj//5X7k79PSCZ6CvaVzb7Qs7VMWS+SlWB5M8p3FqufLP9VNp4CazJ0CsPDLwVD9r3vX7Ci4J56A==}
    cpu: [arm64]
    os: [linux]

  '@rollup/rollup-linux-arm64-musl@4.36.0':
    resolution: {integrity: sha512-QiGnhScND+mAAtfHqeT+cB1S9yFnNQ/EwCg5yE3MzoaZZnIV0RV9O5alJAoJKX/sBONVKeZdMfO8QSaWEygMhw==}
    cpu: [arm64]
    os: [linux]

  '@rollup/rollup-linux-loongarch64-gnu@4.36.0':
    resolution: {integrity: sha512-1ZPyEDWF8phd4FQtTzMh8FQwqzvIjLsl6/84gzUxnMNFBtExBtpL51H67mV9xipuxl1AEAerRBgBwFNpkw8+Lg==}
    cpu: [loong64]
    os: [linux]

  '@rollup/rollup-linux-powerpc64le-gnu@4.36.0':
    resolution: {integrity: sha512-VMPMEIUpPFKpPI9GZMhJrtu8rxnp6mJR3ZzQPykq4xc2GmdHj3Q4cA+7avMyegXy4n1v+Qynr9fR88BmyO74tg==}
    cpu: [ppc64]
    os: [linux]

  '@rollup/rollup-linux-riscv64-gnu@4.36.0':
    resolution: {integrity: sha512-ttE6ayb/kHwNRJGYLpuAvB7SMtOeQnVXEIpMtAvx3kepFQeowVED0n1K9nAdraHUPJ5hydEMxBpIR7o4nrm8uA==}
    cpu: [riscv64]
    os: [linux]

  '@rollup/rollup-linux-s390x-gnu@4.36.0':
    resolution: {integrity: sha512-4a5gf2jpS0AIe7uBjxDeUMNcFmaRTbNv7NxI5xOCs4lhzsVyGR/0qBXduPnoWf6dGC365saTiwag8hP1imTgag==}
    cpu: [s390x]
    os: [linux]

  '@rollup/rollup-linux-x64-gnu@4.36.0':
    resolution: {integrity: sha512-5KtoW8UWmwFKQ96aQL3LlRXX16IMwyzMq/jSSVIIyAANiE1doaQsx/KRyhAvpHlPjPiSU/AYX/8m+lQ9VToxFQ==}
    cpu: [x64]
    os: [linux]

  '@rollup/rollup-linux-x64-musl@4.36.0':
    resolution: {integrity: sha512-sycrYZPrv2ag4OCvaN5js+f01eoZ2U+RmT5as8vhxiFz+kxwlHrsxOwKPSA8WyS+Wc6Epid9QeI/IkQ9NkgYyQ==}
    cpu: [x64]
    os: [linux]

  '@rollup/rollup-win32-arm64-msvc@4.36.0':
    resolution: {integrity: sha512-qbqt4N7tokFwwSVlWDsjfoHgviS3n/vZ8LK0h1uLG9TYIRuUTJC88E1xb3LM2iqZ/WTqNQjYrtmtGmrmmawB6A==}
    cpu: [arm64]
    os: [win32]

  '@rollup/rollup-win32-ia32-msvc@4.36.0':
    resolution: {integrity: sha512-t+RY0JuRamIocMuQcfwYSOkmdX9dtkr1PbhKW42AMvaDQa+jOdpUYysroTF/nuPpAaQMWp7ye+ndlmmthieJrQ==}
    cpu: [ia32]
    os: [win32]

  '@rollup/rollup-win32-x64-msvc@4.36.0':
    resolution: {integrity: sha512-aRXd7tRZkWLqGbChgcMMDEHjOKudo1kChb1Jt1IfR8cY/KIpgNviLeJy5FUb9IpSuQj8dU2fAYNMPW/hLKOSTw==}
    cpu: [x64]
    os: [win32]

  '@sinclair/typebox@0.27.8':
    resolution: {integrity: sha512-+Fj43pSMwJs4KRrH/938Uf+uAELIgVBmQzg/q1YG10djyfA3TnrU8N8XzqCh/okZdszqBQTZf96idMfE5lnwTA==}

  '@sinonjs/commons@3.0.1':
    resolution: {integrity: sha512-K3mCHKQ9sVh8o1C9cxkwxaOmXoAMlDxC1mYyHrjqOWEcBjYr76t96zL2zlj5dUGZ3HSw240X1qgH3Mjf1yJWpQ==}

  '@sinonjs/fake-timers@10.3.0':
    resolution: {integrity: sha512-V4BG07kuYSUkTCSBHG8G8TNhM+F19jXFWnQtzj+we8DrkpSBCee9Z3Ms8yiGer/dlmhe35/Xdgyo3/0rQKg7YA==}

  '@stablelib/base64@1.0.1':
    resolution: {integrity: sha512-1bnPQqSxSuc3Ii6MhBysoWCg58j97aUjuCSZrGSmDxNqtytIi0k8utUenAwTZN4V5mXXYGsVUI9zeBqy+jBOSQ==}

  '@standard-schema/utils@0.3.0':
    resolution: {integrity: sha512-e7Mew686owMaPJVNNLs55PUvgz371nKgwsc4vxE49zsODpJEnxgxRo2y/OKrqueavXgZNMDVj3DdHFlaSAeU8g==}

  '@supabase/auth-js@2.68.0':
    resolution: {integrity: sha512-odG7nb7aOmZPUXk6SwL2JchSsn36Ppx11i2yWMIc/meUO2B2HK9YwZHPK06utD9Ql9ke7JKDbwGin/8prHKxxQ==}

  '@supabase/functions-js@2.4.4':
    resolution: {integrity: sha512-WL2p6r4AXNGwop7iwvul2BvOtuJ1YQy8EbOd0dhG1oN1q8el/BIRSFCFnWAMM/vJJlHWLi4ad22sKbKr9mvjoA==}

  '@supabase/node-fetch@2.6.15':
    resolution: {integrity: sha512-1ibVeYUacxWYi9i0cf5efil6adJ9WRyZBLivgjs+AUpewx1F3xPi7gLgaASI2SmIQxPoCEjAsLAzKPgMJVgOUQ==}
    engines: {node: 4.x || >=6.0.0}

  '@supabase/postgrest-js@1.19.2':
    resolution: {integrity: sha512-MXRbk4wpwhWl9IN6rIY1mR8uZCCG4MZAEji942ve6nMwIqnBgBnZhZlON6zTTs6fgveMnoCILpZv1+K91jN+ow==}

  '@supabase/realtime-js@2.11.2':
    resolution: {integrity: sha512-u/XeuL2Y0QEhXSoIPZZwR6wMXgB+RQbJzG9VErA3VghVt7uRfSVsjeqd7m5GhX3JR6dM/WRmLbVR8URpDWG4+w==}

  '@supabase/storage-js@2.7.1':
    resolution: {integrity: sha512-asYHcyDR1fKqrMpytAS1zjyEfvxuOIp1CIXX7ji4lHHcJKqyk+sLl/Vxgm4sN6u8zvuUtae9e4kDxQP2qrwWBA==}

  '@supabase/supabase-js@2.49.1':
    resolution: {integrity: sha512-lKaptKQB5/juEF5+jzmBeZlz69MdHZuxf+0f50NwhL+IE//m4ZnOeWlsKRjjsM0fVayZiQKqLvYdBn0RLkhGiQ==}

  '@swc/counter@0.1.3':
    resolution: {integrity: sha512-e2BR4lsJkkRlKZ/qCHPw9ZaSxc0MVUd7gtbtaB7aMvHeJVYe8sOB8DBZkP2DtISHGSku9sCK6T6cnY0CtXrOCQ==}

  '@swc/helpers@0.5.15':
    resolution: {integrity: sha512-JQ5TuMi45Owi4/BIMAJBoSQoOJu12oOk/gADqlcUL9JEdHB8vyjUSsxqeNXnmXHjYKMi2WcYtezGEEhqUI/E2g==}

  '@tailwindcss/forms@0.5.10':
    resolution: {integrity: sha512-utI1ONF6uf/pPNO68kmN1b8rEwNXv3czukalo8VtJH8ksIkZXr3Q3VYudZLkCsDd4Wku120uF02hYK25XGPorw==}
    peerDependencies:
      tailwindcss: '>=3.0.0 || >= 3.0.0-alpha.1 || >= 4.0.0-alpha.20 || >= 4.0.0-beta.1'

  '@tailwindcss/typography@0.5.16':
    resolution: {integrity: sha512-0wDLwCVF5V3x3b1SGXPCDcdsbDHMBe+lkFzBRaHeLvNi+nrrnZ1lA18u+OTWO8iSWU2GxUOCvlXtDuqftc1oiA==}
    peerDependencies:
      tailwindcss: '>=3.0.0 || insiders || >=4.0.0-alpha.20 || >=4.0.0-beta.1'

  '@tanstack/query-core@5.69.0':
    resolution: {integrity: sha512-Kn410jq6vs1P8Nm+ZsRj9H+U3C0kjuEkYLxbiCyn3MDEiYor1j2DGVULqAz62SLZtUZ/e9Xt6xMXiJ3NJ65WyQ==}

  '@tanstack/query-devtools@5.67.2':
    resolution: {integrity: sha512-O4QXFFd7xqp6EX7sdvc9tsVO8nm4lpWBqwpgjpVLW5g7IeOY6VnS/xvs/YzbRhBVkKTMaJMOUGU7NhSX+YGoNg==}

  '@tanstack/react-query-devtools@5.69.0':
    resolution: {integrity: sha512-sYklnou3IKAemqB5wJeBwjmG5bUGDKAL5/I4pVA+aqSnsNibVLt8/pAU976uuJ5K71w71bHtI/AMxiIs3gtkEA==}
    peerDependencies:
      '@tanstack/react-query': ^5.69.0
      react: ^18 || ^19

  '@tanstack/react-query@5.69.0':
    resolution: {integrity: sha512-Ift3IUNQqTcaFa1AiIQ7WCb/PPy8aexZdq9pZWLXhfLcLxH0+PZqJ2xFImxCpdDZrFRZhLJrh76geevS5xjRhA==}
    peerDependencies:
      react: ^18 || ^19

  '@types/babel__core@7.20.5':
    resolution: {integrity: sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==}

  '@types/babel__generator@7.6.8':
    resolution: {integrity: sha512-ASsj+tpEDsEiFr1arWrlN6V3mdfjRMZt6LtK/Vp/kreFLnr5QH5+DhvD5nINYZXzwJvXeGq+05iUXcAzVrqWtw==}

  '@types/babel__template@7.4.4':
    resolution: {integrity: sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==}

  '@types/babel__traverse@7.20.6':
    resolution: {integrity: sha512-r1bzfrm0tomOI8g1SzvCaQHo6Lcv6zu0EA+W2kHrt8dyrHQxGzBBL4kdkzIS+jBMV+EYcMAEAqXqYaLJq5rOZg==}

  '@types/caseless@0.12.5':
    resolution: {integrity: sha512-hWtVTC2q7hc7xZ/RLbxapMvDMgUnDvKvMOpKal4DrMyfGBUfB1oKaZlIRr6mJL+If3bAP6sV/QneGzF6tJjZDg==}

  '@types/debug@4.1.12':
    resolution: {integrity: sha512-vIChWdVG3LG1SMxEvI/AK+FWJthlrqlTu7fbrlywTkkaONwk/UAGaULXRlf8vkzFBLVm0zkMdCquhL5aOjhXPQ==}

  '@types/estree-jsx@1.0.5':
    resolution: {integrity: sha512-52CcUVNFyfb1A2ALocQw/Dd1BQFNmSdkuC3BkZ6iqhdMfQz7JWOFRuJFloOzjk+6WijU56m9oKXFAXc7o3Towg==}

  '@types/estree@1.0.6':
    resolution: {integrity: sha512-AYnb1nQyY49te+VRAVgmzfcgjYS91mY5P0TKUDCLEM+gNnA+3T6rWITXRLYCpahpqSQbN5cE+gHpnPyXjHWxcw==}

  '@types/graceful-fs@4.1.9':
    resolution: {integrity: sha512-olP3sd1qOEe5dXTSaFvQG+02VdRXcdytWLAZsAq1PecU8uqQAhkrnbli7DagjtXKW/Bl7YJbUsa8MPcuc8LHEQ==}

  '@types/hast@2.3.10':
    resolution: {integrity: sha512-McWspRw8xx8J9HurkVBfYj0xKoE25tOFlHGdx4MJ5xORQrMGZNqJhVQWaIbm6Oyla5kYOXtDiopzKRJzEOkwJw==}

  '@types/hast@3.0.4':
    resolution: {integrity: sha512-WPs+bbQw5aCj+x6laNGWLH3wviHtoCv/P3+otBhbOhJgG8qtpdAMlTCxLtsTWA7LH1Oh/bFCHsBn0TPS5m30EQ==}

  '@types/istanbul-lib-coverage@2.0.6':
    resolution: {integrity: sha512-2QF/t/auWm0lsy8XtKVPG19v3sSOQlJe/YHZgfjb/KBBHOGSV+J2q/S671rcq9uTBrLAXmZpqJiaQbMT+zNU1w==}

  '@types/istanbul-lib-report@3.0.3':
    resolution: {integrity: sha512-NQn7AHQnk/RSLOxrBbGyJM/aVQ+pjj5HCgasFxc0K/KhoATfQ/47AyUl15I2yBUpihjmas+a+VJBOqecrFH+uA==}

  '@types/istanbul-reports@3.0.4':
    resolution: {integrity: sha512-pk2B1NWalF9toCRu6gjBzR69syFjP4Od8WRAX+0mmf9lAjCRicLOWc+ZrxZHx/0XRjotgkF9t6iaMJ+aXcOdZQ==}

  '@types/jest@29.5.14':
    resolution: {integrity: sha512-ZN+4sdnLUbo8EVvVc2ao0GFW6oVrQRPn4K2lglySj7APvSrgzxHiNNK99us4WDMi57xxA2yggblIAMNhXOotLQ==}

  '@types/mdast@4.0.4':
    resolution: {integrity: sha512-kGaNbPh1k7AFzgpud/gMdvIm5xuECykRR+JnWKQno9TAXVa6WIVCGTPvYGekIDL4uwCZQSYbUxNBSb1aUo79oA==}

  '@types/ms@2.1.0':
    resolution: {integrity: sha512-GsCCIZDE/p3i96vtEqx+7dBUGXrc7zeSK3wwPHIaRThS+9OhWIXRqzs4d6k1SVU8g91DrNRWxWUGhp5KXQb2VA==}

  '@types/node-schedule@2.1.7':
    resolution: {integrity: sha512-G7Z3R9H7r3TowoH6D2pkzUHPhcJrDF4Jz1JOQ80AX0K2DWTHoN9VC94XzFAPNMdbW9TBzMZ3LjpFi7RYdbxtXA==}

  '@types/node-telegram-bot-api@0.64.8':
    resolution: {integrity: sha512-1c1RF6iWdPfuzknnJTrTT+JeIqpw2KcY2sxvXBq7Ycf7AEMK3dhV7uFNQbqPSrvWfSCshE2HnivI8THeFtwQpg==}

  '@types/node@20.17.24':
    resolution: {integrity: sha512-d7fGCyB96w9BnWQrOsJtpyiSaBcAYYr75bnK6ZRjDbql2cGLj/3GsL5OYmLPNq76l7Gf2q4Rv9J2o6h5CrD9sA==}

  '@types/node@22.13.11':
    resolution: {integrity: sha512-iEUCUJoU0i3VnrCmgoWCXttklWcvoCIx4jzcP22fioIVSdTmjgoEvmAO/QPw6TcS9k5FrNgn4w7q5lGOd1CT5g==}

  '@types/parse-json@4.0.2':
    resolution: {integrity: sha512-dISoDXWWQwUquiKsyZ4Ng+HX2KsPL7LyHKHQwgGFEA3IaKac4Obd+h2a/a6waisAoepJlBcx9paWqjA8/HVjCw==}

  '@types/phoenix@1.6.6':
    resolution: {integrity: sha512-PIzZZlEppgrpoT2QgbnDU+MMzuR6BbCjllj0bM70lWoejMeNJAxCchxnv7J3XFkI8MpygtRpzXrIlmWUBclP5A==}

  '@types/prismjs@1.26.5':
    resolution: {integrity: sha512-AUZTa7hQ2KY5L7AmtSiqxlhWxb4ina0yd8hNbl4TWuqnv/pFP0nDMb3YrfSBf4hJVGLh2YEIBfKaBW/9UEl6IQ==}

  '@types/prop-types@15.7.14':
    resolution: {integrity: sha512-gNMvNH49DJ7OJYv+KAKn0Xp45p8PLl6zo2YnvDIbTd4J6MER2BmWN49TG7n9LvkyihINxeKW8+3bfS2yDC9dzQ==}

  '@types/react-dom@18.3.5':
    resolution: {integrity: sha512-P4t6saawp+b/dFrUr2cvkVsfvPguwsxtH6dNIYRllMsefqFzkZk5UIjzyDOv5g1dXIPdG4Sp1yCR4Z6RCUsG/Q==}
    peerDependencies:
      '@types/react': ^18.0.0

  '@types/react-syntax-highlighter@15.5.13':
    resolution: {integrity: sha512-uLGJ87j6Sz8UaBAooU0T6lWJ0dBmjZgN1PZTrj05TNql2/XpC6+4HhMT5syIdFUUt+FASfCeLLv4kBygNU+8qA==}

  '@types/react-transition-group@4.4.12':
    resolution: {integrity: sha512-8TV6R3h2j7a91c+1DXdJi3Syo69zzIZbz7Lg5tORM5LEJG7X/E6a1V3drRyBRZq7/utz7A+c4OgYLiLcYGHG6w==}
    peerDependencies:
      '@types/react': '*'

  '@types/react@18.3.18':
    resolution: {integrity: sha512-t4yC+vtgnkYjNSKlFx1jkAhH8LgTo2N/7Qvi83kdEaUtMDiwpbLAktKDaAMlRcJ5eSxZkH74eEGt1ky31d7kfQ==}

  '@types/request@2.48.12':
    resolution: {integrity: sha512-G3sY+NpsA9jnwm0ixhAFQSJ3Q9JkpLZpJbI3GMv0mIAT0y3mRabYeINzal5WOChIiaTEGQYlHOKgkaM9EisWHw==}

  '@types/stack-utils@2.0.3':
    resolution: {integrity: sha512-9aEbYZ3TbYMznPdcdr3SmIrLXwC/AKZXQeCf9Pgao5CKb8CyHuEX5jzWPTkvregvhRJHcpRO6BFoGW9ycaOkYw==}

  '@types/tough-cookie@4.0.5':
    resolution: {integrity: sha512-/Ad8+nIOV7Rl++6f1BdKxFSMgmoqEoYbHRpPcx3JEfv8VRsQe9Z4mCXeJBzxs7mbHY/XOZZuXlRNfhpVPbs6ZA==}

  '@types/unist@2.0.11':
    resolution: {integrity: sha512-CmBKiL6NNo/OqgmMn95Fk9Whlp2mtvIv+KNpQKN2F4SjvrEesubTRWGYSg+BnWZOnlCaSTU1sMpsBOzgbYhnsA==}

  '@types/unist@3.0.3':
    resolution: {integrity: sha512-ko/gIFJRv177XgZsZcBwnqJN5x/Gien8qNOn0D5bQU/zAzVf9Zt3BlcUiLqhV9y4ARk0GbT3tnUiPNgnTXzc/Q==}

  '@types/ws@8.18.0':
    resolution: {integrity: sha512-8svvI3hMyvN0kKCJMvTJP/x6Y/EoQbepff882wL+Sn5QsXb3etnamgrJq4isrBxSJj5L2AuXcI0+bgkoAXGUJw==}

  '@types/yargs-parser@21.0.3':
    resolution: {integrity: sha512-I4q9QU9MQv4oEOz4tAHJtNz1cwuLxn2F3xcc2iV5WdqLPpUnj30aUuxt1mAxYTG+oe8CZMV/+6rU4S4gRDzqtQ==}

  '@types/yargs@17.0.33':
    resolution: {integrity: sha512-WpxBCKWPLr4xSsHgz511rFJAM+wS28w2zEO1QDNY5zM/S8ok70NNfztH0xwhqKyaK0OHCbN98LDAZuy1ctxDkA==}

  '@typescript-eslint/eslint-plugin@7.18.0':
    resolution: {integrity: sha512-94EQTWZ40mzBc42ATNIBimBEDltSJ9RQHCC8vc/PDbxi4k8dVwUAv4o98dk50M1zB+JGFxp43FP7f8+FP8R6Sw==}
    engines: {node: ^18.18.0 || >=20.0.0}
    peerDependencies:
      '@typescript-eslint/parser': ^7.0.0
      eslint: ^8.56.0
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true

  '@typescript-eslint/parser@7.18.0':
    resolution: {integrity: sha512-4Z+L8I2OqhZV8qA132M4wNL30ypZGYOQVBfMgxDH/K5UX0PNqTu1c6za9ST5r9+tavvHiTWmBnKzpCJ/GlVFtg==}
    engines: {node: ^18.18.0 || >=20.0.0}
    peerDependencies:
      eslint: ^8.56.0
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true

  '@typescript-eslint/scope-manager@7.18.0':
    resolution: {integrity: sha512-jjhdIE/FPF2B7Z1uzc6i3oWKbGcHb87Qw7AWj6jmEqNOfDFbJWtjt/XfwCpvNkpGWlcJaog5vTR+VV8+w9JflA==}
    engines: {node: ^18.18.0 || >=20.0.0}

  '@typescript-eslint/type-utils@7.18.0':
    resolution: {integrity: sha512-XL0FJXuCLaDuX2sYqZUUSOJ2sG5/i1AAze+axqmLnSkNEVMVYLF+cbwlB2w8D1tinFuSikHmFta+P+HOofrLeA==}
    engines: {node: ^18.18.0 || >=20.0.0}
    peerDependencies:
      eslint: ^8.56.0
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true

  '@typescript-eslint/types@7.18.0':
    resolution: {integrity: sha512-iZqi+Ds1y4EDYUtlOOC+aUmxnE9xS/yCigkjA7XpTKV6nCBd3Hp/PRGGmdwnfkV2ThMyYldP1wRpm/id99spTQ==}
    engines: {node: ^18.18.0 || >=20.0.0}

  '@typescript-eslint/typescript-estree@7.18.0':
    resolution: {integrity: sha512-aP1v/BSPnnyhMHts8cf1qQ6Q1IFwwRvAQGRvBFkWlo3/lH29OXA3Pts+c10nxRxIBrDnoMqzhgdwVe5f2D6OzA==}
    engines: {node: ^18.18.0 || >=20.0.0}
    peerDependencies:
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true

  '@typescript-eslint/utils@7.18.0':
    resolution: {integrity: sha512-kK0/rNa2j74XuHVcoCZxdFBMF+aq/vH83CXAOHieC+2Gis4mF8jJXT5eAfyD3K0sAxtPuwxaIOIOvhwzVDt/kw==}
    engines: {node: ^18.18.0 || >=20.0.0}
    peerDependencies:
      eslint: ^8.56.0

  '@typescript-eslint/visitor-keys@7.18.0':
    resolution: {integrity: sha512-cDF0/Gf81QpY3xYyJKDV14Zwdmid5+uuENhjH2EqFaF0ni+yAyq/LzMaIJdhNJXZI7uLzwIlA+V7oWoyn6Curg==}
    engines: {node: ^18.18.0 || >=20.0.0}

  '@uiw/copy-to-clipboard@1.0.17':
    resolution: {integrity: sha512-O2GUHV90Iw2VrSLVLK0OmNIMdZ5fgEg4NhvtwINsX+eZ/Wf6DWD0TdsK9xwV7dNRnK/UI2mQtl0a2/kRgm1m1A==}

  '@uiw/react-markdown-preview@5.1.3':
    resolution: {integrity: sha512-jV02wO4XHWFk54kz7sLqOkdPgJLttSfKLyen47XgjcyGgQXU2I4WJBygmdpV2AT9m/MiQ8qrN1Y+E5Syv9ZDpw==}
    peerDependencies:
      react: '>=16.8.0'
      react-dom: '>=16.8.0'

  '@uiw/react-md-editor@4.0.5':
    resolution: {integrity: sha512-x+S7ZMz1B+KwVODOZk663H2gdOZhcFsrPUF8V69K4L2BbTZ3A4sBCw/uTrBE9dHH0gajAzRAYbAYCHsUQaTcyA==}
    peerDependencies:
      react: '>=16.8.0'
      react-dom: '>=16.8.0'

  '@ungap/structured-clone@1.3.0':
    resolution: {integrity: sha512-WmoN8qaIAo7WTYWbAZuG8PYEhn5fkz7dZrqTBZ7dtt//lL2Gwms1IcnQ5yHqjDfX8Ft5j4YzDM23f87zBfDe9g==}

  '@vitejs/plugin-react@4.3.4':
    resolution: {integrity: sha512-SCCPBJtYLdE8PX/7ZQAs1QAZ8Jqwih+0VBLum1EGqmCCQal+MIUqLCzj3ZUy8ufbC0cAM4LRlSTm7IQJwWT4ug==}
    engines: {node: ^14.18.0 || >=16.0.0}
    peerDependencies:
      vite: ^4.2.0 || ^5.0.0 || ^6.0.0

  acorn-jsx@5.3.2:
    resolution: {integrity: sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==}
    peerDependencies:
      acorn: ^6.0.0 || ^7.0.0 || ^8.0.0

  acorn@8.14.1:
    resolution: {integrity: sha512-OvQ/2pUDKmgfCg++xsTX1wGxfTaszcHVcTctW4UJB4hibJx2HXxxO5UmVgyjMa+ZDsiaf5wWLXYpRWMmBI0QHg==}
    engines: {node: '>=0.4.0'}
    hasBin: true

  ajv@6.12.6:
    resolution: {integrity: sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==}

  ansi-escapes@4.3.2:
    resolution: {integrity: sha512-gKXj5ALrKWQLsYG9jlTRmR/xKluxHV+Z9QEwNIgCfM1/uwPMCuzVVnh5mwTd+OuBZcwSIMbqssNWRm1lE51QaQ==}
    engines: {node: '>=8'}

  ansi-regex@5.0.1:
    resolution: {integrity: sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==}
    engines: {node: '>=8'}

  ansi-regex@6.1.0:
    resolution: {integrity: sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==}
    engines: {node: '>=12'}

  ansi-styles@4.3.0:
    resolution: {integrity: sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==}
    engines: {node: '>=8'}

  ansi-styles@5.2.0:
    resolution: {integrity: sha512-Cxwpt2SfTzTtXcfOlzGEee8O+c+MmUgGrNiBcXnuWxuFJHe6a5Hz7qwhwe5OgaSYI0IJvkLqWX1ASG+cJOkEiA==}
    engines: {node: '>=10'}

  ansi-styles@6.2.1:
    resolution: {integrity: sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==}
    engines: {node: '>=12'}

  any-promise@1.3.0:
    resolution: {integrity: sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==}

  anymatch@3.1.3:
    resolution: {integrity: sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==}
    engines: {node: '>= 8'}

  arg@5.0.2:
    resolution: {integrity: sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==}

  argparse@1.0.10:
    resolution: {integrity: sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==}

  argparse@2.0.1:
    resolution: {integrity: sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==}

  aria-hidden@1.2.4:
    resolution: {integrity: sha512-y+CcFFwelSXpLZk/7fMB2mUbGtX9lKycf1MWJ7CaTIERyitVlyQx6C+sxcROU2BAJ24OiZyK+8wj2i8AlBoS3A==}
    engines: {node: '>=10'}

  array-buffer-byte-length@1.0.2:
    resolution: {integrity: sha512-LHE+8BuR7RYGDKvnrmcuSq3tDcKv9OFEXQt/HpbZhY7V6h0zlUXutnAD82GiFx9rdieCMjkvtcsPqBwgUl1Iiw==}
    engines: {node: '>= 0.4'}

  array-union@2.1.0:
    resolution: {integrity: sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==}
    engines: {node: '>=8'}

  array.prototype.findindex@2.2.4:
    resolution: {integrity: sha512-LLm4mhxa9v8j0A/RPnpQAP4svXToJFh+Hp1pNYl5ZD5qpB4zdx/D4YjpVcETkhFbUKWO3iGMVLvrOnnmkAJT6A==}
    engines: {node: '>= 0.4'}

  arraybuffer.prototype.slice@1.0.4:
    resolution: {integrity: sha512-BNoCY6SXXPQ7gF2opIP4GBE+Xw7U+pHMYKuzjgCN3GwiaIR09UUeKfheyIry77QtrCBlC0KK0q5/TER/tYh3PQ==}
    engines: {node: '>= 0.4'}

  asn1@0.2.6:
    resolution: {integrity: sha512-ix/FxPn0MDjeyJ7i/yoHGFt/EX6LyNbxSEhPPXODPL+KB0VPk86UYfL0lMdy+KCnv+fmvIzySwaK5COwqVbWTQ==}

  assert-plus@1.0.0:
    resolution: {integrity: sha512-NfJ4UzBCcQGLDlQq7nHxH+tv3kyZ0hHQqF5BO6J7tNJeP5do1llPr8dZ8zHonfhAu0PHAdMkSo+8o0wxg9lZWw==}
    engines: {node: '>=0.8'}

  async-function@1.0.0:
    resolution: {integrity: sha512-hsU18Ae8CDTR6Kgu9DYf0EbCr/a5iGL0rytQDobUcdpYOKokk8LEjVphnXkDkgpi0wYVsqrXuP0bZxJaTqdgoA==}
    engines: {node: '>= 0.4'}

  asynckit@0.4.0:
    resolution: {integrity: sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==}

  attr-accept@2.2.5:
    resolution: {integrity: sha512-0bDNnY/u6pPwHDMoF0FieU354oBi0a8rD9FcsLwzcGWbc8KS8KPIi7y+s13OlVY+gMWc/9xEMUgNE6Qm8ZllYQ==}
    engines: {node: '>=4'}

  autoprefixer@10.4.20:
    resolution: {integrity: sha512-XY25y5xSv/wEoqzDyXXME4AFfkZI0P23z6Fs3YgymDnKJkCGOnkL0iTxCa85UTqaSgfcqyf3UA6+c7wUvx/16g==}
    engines: {node: ^10 || ^12 || >=14}
    hasBin: true
    peerDependencies:
      postcss: ^8.1.0

  available-typed-arrays@1.0.7:
    resolution: {integrity: sha512-wvUjBtSGN7+7SjNpq/9M2Tg350UZD3q62IFZLbRAR1bSMlCo1ZaeW+BJ+D090e4hIIZLBcTDWe4Mh4jvUDajzQ==}
    engines: {node: '>= 0.4'}

  aws-sign2@0.7.0:
    resolution: {integrity: sha512-08kcGqnYf/YmjoRhfxyu+CLxBjUtHLXLXX/vUfx9l2LYzG3c1m61nrpyFUZI6zeS+Li/wWMMidD9KgrqtGq3mA==}

  aws4@1.13.2:
    resolution: {integrity: sha512-lHe62zvbTB5eEABUVi/AwVh0ZKY9rMMDhmm+eeyuuUQbQ3+J+fONVQOZyj+DdrvD4BY33uYniyRJ4UJIaSKAfw==}

  axios@0.18.0:
    resolution: {integrity: sha512-14hgP2oTu6SPu+26Ofye6Se8u5Mmjc07a0ACHTJ5POKFU1Mtxz2IxSvaWy1O+QnbSa8XHy1gYz2E1l+G26XJdA==}
    deprecated: Critical security vulnerability fixed in v0.21.1. For more information, see https://github.com/axios/axios/pull/3410

  axios@1.8.4:
    resolution: {integrity: sha512-eBSYY4Y68NNlHbHBMdeDmKNtDgXWhQsJcGqzO3iLUM0GraQFSS9cVgPX5I9b3lbdFKyYoAEGAZF1DwhTaljNAw==}

  babel-jest@29.7.0:
    resolution: {integrity: sha512-BrvGY3xZSwEcCzKvKsCi2GgHqDqsYkOP4/by5xCgIwGXQxIEh+8ew3gmrE1y7XRR6LHZIj6yLYnUi/mm2KXKBg==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    peerDependencies:
      '@babel/core': ^7.8.0

  babel-plugin-istanbul@6.1.1:
    resolution: {integrity: sha512-Y1IQok9821cC9onCx5otgFfRm7Lm+I+wwxOx738M/WLPZ9Q42m4IG5W0FNX8WLL2gYMZo3JkuXIH2DOpWM+qwA==}
    engines: {node: '>=8'}

  babel-plugin-jest-hoist@29.6.3:
    resolution: {integrity: sha512-ESAc/RJvGTFEzRwOTT4+lNDk/GNHMkKbNzsvT0qKRfDyyYTskxB5rnU2njIDYVxXCBHHEI1c0YwHob3WaYujOg==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  babel-plugin-macros@3.1.0:
    resolution: {integrity: sha512-Cg7TFGpIr01vOQNODXOOaGz2NpCU5gl8x1qJFbb6hbZxR7XrcE2vtbAsTAbJ7/xwJtUuJEw8K8Zr/AE0LHlesg==}
    engines: {node: '>=10', npm: '>=6'}

  babel-preset-current-node-syntax@1.1.0:
    resolution: {integrity: sha512-ldYss8SbBlWva1bs28q78Ju5Zq1F+8BrqBZZ0VFhLBvhh6lCpC2o3gDJi/5DRLs9FgYZCnmPYIVFU4lRXCkyUw==}
    peerDependencies:
      '@babel/core': ^7.0.0

  babel-preset-jest@29.6.3:
    resolution: {integrity: sha512-0B3bhxR6snWXJZtR/RliHTDPRgn1sNHOR0yVtq/IiQFyuOVjFS+wuio/R4gSNkyYmKmJB4wGZv2NZanmKmTnNA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    peerDependencies:
      '@babel/core': ^7.0.0

  bail@2.0.2:
    resolution: {integrity: sha512-0xO6mYd7JB2YesxDKplafRpsiOzPt9V02ddPCLbY1xYGPOX24NTyN50qnUxgCPcSoYMhKpAuBTjQoRZCAkUDRw==}

  balanced-match@1.0.2:
    resolution: {integrity: sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==}

  bcp-47-match@2.0.3:
    resolution: {integrity: sha512-JtTezzbAibu8G0R9op9zb3vcWZd9JF6M0xOYGPn0fNCd7wOpRB1mU2mH9T8gaBGbAAyIIVgB2G7xG0GP98zMAQ==}

  bcrypt-pbkdf@1.0.2:
    resolution: {integrity: sha512-qeFIXtP4MSoi6NLqO12WfqARWWuCKi2Rn/9hJLEmtB5yTNr9DqFWkJRCf2qShWzPeAMRnOgCrq0sg/KLv5ES9w==}

  binary-extensions@2.3.0:
    resolution: {integrity: sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==}
    engines: {node: '>=8'}

  bl@1.2.3:
    resolution: {integrity: sha512-pvcNpa0UU69UT341rO6AYy4FVAIkUHuZXRIWbq+zHnsVcRzDDjIAhGuuYoi0d//cwIwtt4pkpKycWEfjdV+vww==}

  bluebird@3.7.2:
    resolution: {integrity: sha512-XpNj6GDQzdfW+r2Wnn7xiSAd7TM3jzkxGXBGTtWKuSXv1xUV+azxAm8jdWZN06QTQk+2N2XB9jRDkvbmQmcRtg==}

  boolbase@1.0.0:
    resolution: {integrity: sha512-JZOSA7Mo9sNGB8+UjSgzdLtokWAky1zbztM3WRLCbZ70/3cTANmQmOdR7y2g+J0e2WXywy1yS468tY+IruqEww==}

  brace-expansion@1.1.11:
    resolution: {integrity: sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==}

  brace-expansion@2.0.1:
    resolution: {integrity: sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==}

  braces@3.0.3:
    resolution: {integrity: sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==}
    engines: {node: '>=8'}

  browserslist@4.24.4:
    resolution: {integrity: sha512-KDi1Ny1gSePi1vm0q4oxSF8b4DR44GF4BbmS2YdhPLOEqd8pDviZOGH/GsmRwoWJ2+5Lr085X7naowMwKHDG1A==}
    engines: {node: ^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7}
    hasBin: true

  bser@2.1.1:
    resolution: {integrity: sha512-gQxTNE/GAfIIrmHLUE3oJyp5FO6HRBfhjnw4/wMmA63ZGDJnWBmgY/lyQBpnDUkGmAhbSe39tx2d/iTOAfglwQ==}

  buffer-from@1.1.2:
    resolution: {integrity: sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==}

  bufferutil@4.0.9:
    resolution: {integrity: sha512-WDtdLmJvAuNNPzByAYpRo2rF1Mmradw6gvWsQKf63476DDXmomT9zUiGypLcG4ibIM67vhAj8jJRdbmEws2Aqw==}
    engines: {node: '>=6.14.2'}

  busboy@1.6.0:
    resolution: {integrity: sha512-8SFQbg/0hQ9xy3UNTB0YEnsNBbWfhf7RtnzpL7TkBiTBRfrQ9Fxcnz7VJsleJpyp6rVLvXiuORqjlHi5q+PYuA==}
    engines: {node: '>=10.16.0'}

  call-bind-apply-helpers@1.0.2:
    resolution: {integrity: sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==}
    engines: {node: '>= 0.4'}

  call-bind@1.0.8:
    resolution: {integrity: sha512-oKlSFMcMwpUg2ednkhQ454wfWiU/ul3CkJe/PEHcTKuiX6RpbehUiFMXu13HalGZxfUwCQzZG747YXBn1im9ww==}
    engines: {node: '>= 0.4'}

  call-bound@1.0.4:
    resolution: {integrity: sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==}
    engines: {node: '>= 0.4'}

  callsites@3.1.0:
    resolution: {integrity: sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==}
    engines: {node: '>=6'}

  camelcase-css@2.0.1:
    resolution: {integrity: sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==}
    engines: {node: '>= 6'}

  camelcase@5.3.1:
    resolution: {integrity: sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==}
    engines: {node: '>=6'}

  camelcase@6.3.0:
    resolution: {integrity: sha512-Gmy6FhYlCY7uOElZUSbxo2UCDH8owEk996gkbrpsgGtrJLM3J7jGxl9Ic7Qwwj4ivOE5AWZWRMecDdF7hqGjFA==}
    engines: {node: '>=10'}

  caniuse-lite@1.0.30001702:
    resolution: {integrity: sha512-LoPe/D7zioC0REI5W73PeR1e1MLCipRGq/VkovJnd6Df+QVqT+vT33OXCp8QUd7kA7RZrHWxb1B36OQKI/0gOA==}

  caseless@0.12.0:
    resolution: {integrity: sha512-4tYFyifaFfGacoiObjJegolkwSU4xQNGbVgUiNYVUxbQ2x2lUsFvY4hVgVzGiIe6WLOPqycWXA40l+PWsxthUw==}

  ccount@2.0.1:
    resolution: {integrity: sha512-eyrF0jiFpY+3drT6383f1qhkbGsLSifNAjA61IUjZjmLCWjItY6LB9ft9YhoDgwfmclB2zhu51Lc7+95b8NRAg==}

  chalk@4.1.2:
    resolution: {integrity: sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==}
    engines: {node: '>=10'}

  char-regex@1.0.2:
    resolution: {integrity: sha512-kWWXztvZ5SBQV+eRgKFeh8q5sLuZY2+8WUIzlxWVTg+oGwY14qylx1KbKzHd8P6ZYkAg0xyIDU9JMHhyJMZ1jw==}
    engines: {node: '>=10'}

  character-entities-html4@2.1.0:
    resolution: {integrity: sha512-1v7fgQRj6hnSwFpq1Eu0ynr/CDEw0rXo2B61qXrLNdHZmPKgb7fqS1a2JwF0rISo9q77jDI8VMEHoApn8qDoZA==}

  character-entities-legacy@1.1.4:
    resolution: {integrity: sha512-3Xnr+7ZFS1uxeiUDvV02wQ+QDbc55o97tIV5zHScSPJpcLm/r0DFPcoY3tYRp+VZukxuMeKgXYmsXQHO05zQeA==}

  character-entities-legacy@3.0.0:
    resolution: {integrity: sha512-RpPp0asT/6ufRm//AJVwpViZbGM/MkjQFxJccQRHmISF/22NBtsHqAWmL+/pmkPWoIUJdWyeVleTl1wydHATVQ==}

  character-entities@1.2.4:
    resolution: {integrity: sha512-iBMyeEHxfVnIakwOuDXpVkc54HijNgCyQB2w0VfGQThle6NXn50zU6V/u+LDhxHcDUPojn6Kpga3PTAD8W1bQw==}

  character-entities@2.0.2:
    resolution: {integrity: sha512-shx7oQ0Awen/BRIdkjkvz54PnEEI/EjwXDSIZp86/KKdbafHh1Df/RYGBhn4hbe2+uKC9FnT5UCEdyPz3ai9hQ==}

  character-reference-invalid@1.1.4:
    resolution: {integrity: sha512-mKKUkUbhPpQlCOfIuZkvSEgktjPFIsZKRRbC6KWVEMvlzblj3i3asQv5ODsrwt0N3pHAEvjP8KTQPHkp0+6jOg==}

  character-reference-invalid@2.0.1:
    resolution: {integrity: sha512-iBZ4F4wRbyORVsu0jPV7gXkOsGYjGHPmAyv+HiHG8gi5PtC9KI2j1+v8/tlibRvjoWX027ypmG/n0HtO5t7unw==}

  chokidar@3.6.0:
    resolution: {integrity: sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==}
    engines: {node: '>= 8.10.0'}

  ci-info@3.9.0:
    resolution: {integrity: sha512-NIxF55hv4nSqQswkAeiOi1r83xy8JldOFDTWiug55KBu9Jnblncd2U6ViHmYgHf01TPZS77NJBhBMKdWj9HQMQ==}
    engines: {node: '>=8'}

  cjs-module-lexer@1.4.3:
    resolution: {integrity: sha512-9z8TZaGM1pfswYeXrUpzPrkx8UnWYdhJclsiYMm6x/w5+nN+8Tf/LnAgfLGQCm59qAOxU8WwHEq2vNwF6i4j+Q==}

  class-variance-authority@0.7.1:
    resolution: {integrity: sha512-Ka+9Trutv7G8M6WT6SeiRWz792K5qEqIGEGzXKhAE6xOWAY6pPH8U+9IY3oCMv6kqTmLsv7Xh/2w2RigkePMsg==}

  client-only@0.0.1:
    resolution: {integrity: sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==}

  cliui@8.0.1:
    resolution: {integrity: sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==}
    engines: {node: '>=12'}

  clsx@2.1.1:
    resolution: {integrity: sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==}
    engines: {node: '>=6'}

  co@4.6.0:
    resolution: {integrity: sha512-QVb0dM5HvG+uaxitm8wONl7jltx8dqhfU33DcqtOZcLSVIKSDDLDi7+0LbAKiyI8hD9u42m2YxXSkMGWThaecQ==}
    engines: {iojs: '>= 1.0.0', node: '>= 0.12.0'}

  coinbase-commerce@1.1.0:
    resolution: {integrity: sha512-8gkMUXaLMUlU06vzApp3NDt/ERkCEfV1gsY81GZ0zFgKxMTPf0STZJEyPuukXnfSQWUHKgtgm4kklskQ8WXV6g==}
    engines: {node: '>=8.10'}

  collect-v8-coverage@1.0.2:
    resolution: {integrity: sha512-lHl4d5/ONEbLlJvaJNtsF/Lz+WvB07u2ycqTYbdrq7UypDXailES4valYb2eWiJFxZlVmpGekfqoxQhzyFdT4Q==}

  color-convert@2.0.1:
    resolution: {integrity: sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==}
    engines: {node: '>=7.0.0'}

  color-name@1.1.4:
    resolution: {integrity: sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==}

  color-string@1.9.1:
    resolution: {integrity: sha512-shrVawQFojnZv6xM40anx4CkoDP+fZsw/ZerEMsW/pyzsRbElpsL/DBVW7q3ExxwusdNXI3lXpuhEZkzs8p5Eg==}

  color@4.2.3:
    resolution: {integrity: sha512-1rXeuUUiGGrykh+CeBdu5Ie7OJwinCgQY0bc7GCRxy5xVHy+moaqkpL/jqQq0MtQOeYcrqEz4abc5f0KtU7W4A==}
    engines: {node: '>=12.5.0'}

  combined-stream@1.0.8:
    resolution: {integrity: sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==}
    engines: {node: '>= 0.8'}

  comma-separated-tokens@1.0.8:
    resolution: {integrity: sha512-GHuDRO12Sypu2cV70d1dkA2EUmXHgntrzbpvOB+Qy+49ypNfGgFQIC2fhhXbnyrJRynDCAARsT7Ou0M6hirpfw==}

  comma-separated-tokens@2.0.3:
    resolution: {integrity: sha512-Fu4hJdvzeylCfQPp9SGWidpzrMs7tTrlu6Vb8XGaRGck8QSNZJJp538Wrb60Lax4fPwR64ViY468OIUTbRlGZg==}

  commander@2.20.3:
    resolution: {integrity: sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==}

  commander@4.1.1:
    resolution: {integrity: sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==}
    engines: {node: '>= 6'}

  concat-map@0.0.1:
    resolution: {integrity: sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==}

  convert-source-map@1.9.0:
    resolution: {integrity: sha512-ASFBup0Mz1uyiIjANan1jzLQami9z1PoYSZCiiYW2FczPbenXc45FZdBZLzOT+r6+iciuEModtmCti+hjaAk0A==}

  convert-source-map@2.0.0:
    resolution: {integrity: sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==}

  core-util-is@1.0.2:
    resolution: {integrity: sha512-3lqz5YjWTYnW6dlDa5TLaTCcShfar1e40rmcJVwCBJC6mWlFuj0eCHIElmG1g5kyuJ/GD+8Wn4FFCcz4gJPfaQ==}

  core-util-is@1.0.3:
    resolution: {integrity: sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ==}

  cosmiconfig@7.1.0:
    resolution: {integrity: sha512-AdmX6xUzdNASswsFtmwSt7Vj8po9IuqXm0UXz7QKPuEUmPB4XyjGfaAr2PSuELMwkRMVH1EpIkX5bTZGRB3eCA==}
    engines: {node: '>=10'}

  create-jest@29.7.0:
    resolution: {integrity: sha512-Adz2bdH0Vq3F53KEMJOoftQFutWCukm6J24wbPWRO4k1kMY7gS7ds/uoJkNuV8wDCtWWnuwGcJwpWcih+zEW1Q==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    hasBin: true

  cron-parser@4.9.0:
    resolution: {integrity: sha512-p0SaNjrHOnQeR8/VnfGbmg9te2kfyYSQ7Sc/j/6DtPL3JQvKxmjO9TSjNFpujqV3vEYYBvNNvXSxzyksBWAx1Q==}
    engines: {node: '>=12.0.0'}

  cross-spawn@7.0.6:
    resolution: {integrity: sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==}
    engines: {node: '>= 8'}

  css-selector-parser@3.1.1:
    resolution: {integrity: sha512-Y+DuvJ7JAjpL1f4DeILe5sXCC3kRXMl0DxM4lAWbS8/jEZ29o3V0L5TL6zIifj4Csmj6c+jiF2ENjida2OVOGA==}

  cssesc@3.0.0:
    resolution: {integrity: sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==}
    engines: {node: '>=4'}
    hasBin: true

  csstype@3.1.1:
    resolution: {integrity: sha512-DJR/VvkAvSZW9bTouZue2sSxDwdTN92uHjqeKVm+0dAqdfNykRzQ95tay8aXMBAAPpUiq4Qcug2L7neoRh2Egw==}

  csstype@3.1.3:
    resolution: {integrity: sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==}

  dashdash@1.14.1:
    resolution: {integrity: sha512-jRFi8UDGo6j+odZiEpjazZaWqEal3w/basFjQHQEwVtZJGDpxbH1MeYluwCS8Xq5wmLJooDlMgvVarmWfGM44g==}
    engines: {node: '>=0.10'}

  data-view-buffer@1.0.2:
    resolution: {integrity: sha512-EmKO5V3OLXh1rtK2wgXRansaK1/mtVdTUEiEI0W8RkvgT05kfxaH29PliLnpLP73yYO6142Q72QNa8Wx/A5CqQ==}
    engines: {node: '>= 0.4'}

  data-view-byte-length@1.0.2:
    resolution: {integrity: sha512-tuhGbE6CfTM9+5ANGf+oQb72Ky/0+s3xKUpHvShfiz2RxMFgFPjsXuRLBVMtvMs15awe45SRb83D6wH4ew6wlQ==}
    engines: {node: '>= 0.4'}

  data-view-byte-offset@1.0.1:
    resolution: {integrity: sha512-BS8PfmtDGnrgYdOonGZQdLZslWIeCGFP9tpan0hi1Co2Zr2NKADsvGYA8XxuG/4UWgJ6Cjtv+YJnB6MM69QGlQ==}
    engines: {node: '>= 0.4'}

  date-fns@4.1.0:
    resolution: {integrity: sha512-Ukq0owbQXxa/U3EGtsdVBkR1w7KOQ5gIBqdH2hkvknzZPYvBxb/aa6E8L7tmjFtkwZBu3UXBbjIgPo/Ez4xaNg==}

  debug@3.2.7:
    resolution: {integrity: sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  debug@4.4.0:
    resolution: {integrity: sha512-6WTZ/IxCY/T6BALoZHaE4ctp9xm+Z5kY/pzYaCHRFeyVhojxlrm+46y68HA6hr0TcwEssoxNiDEUJQjfPZ/RYA==}
    engines: {node: '>=6.0'}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  decode-named-character-reference@1.1.0:
    resolution: {integrity: sha512-Wy+JTSbFThEOXQIR2L6mxJvEs+veIzpmqD7ynWxMXGpnk3smkHQOp6forLdHsKpAMW9iJpaBBIxz285t1n1C3w==}

  dedent@1.5.3:
    resolution: {integrity: sha512-NHQtfOOW68WD8lgypbLA5oT+Bt0xXJhiYvoR6SmmNXZfpzOGXwdKWmcwG8N7PwVVWV3eF/68nmD9BaJSsTBhyQ==}
    peerDependencies:
      babel-plugin-macros: ^3.1.0
    peerDependenciesMeta:
      babel-plugin-macros:
        optional: true

  deep-is@0.1.4:
    resolution: {integrity: sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==}

  deepmerge@4.3.1:
    resolution: {integrity: sha512-3sUqbMEc77XqpdNO7FRyRog+eW3ph+GYCbj+rK+uYyRMuwsVy0rMiVtPn+QJlKFvWP/1PYpapqYn0Me2knFn+A==}
    engines: {node: '>=0.10.0'}

  define-data-property@1.1.4:
    resolution: {integrity: sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==}
    engines: {node: '>= 0.4'}

  define-properties@1.2.1:
    resolution: {integrity: sha512-8QmQKqEASLd5nx0U1B1okLElbUuuttJ/AnYmRXbbbGDWh6uS208EjD4Xqq/I9wK7u0v6O08XhTWnt5XtEbR6Dg==}
    engines: {node: '>= 0.4'}

  delayed-stream@1.0.0:
    resolution: {integrity: sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==}
    engines: {node: '>=0.4.0'}

  dequal@2.0.3:
    resolution: {integrity: sha512-0je+qPKHEMohvfRTCEo3CrPG6cAzAYgmzKyxRiYSSDkS6eGJdyVJm7WaYA5ECaAD9wLB2T4EEeymA5aFVcYXCA==}
    engines: {node: '>=6'}

  detect-libc@2.0.3:
    resolution: {integrity: sha512-bwy0MGW55bG41VqxxypOsdSdGqLwXPI/focwgTYCFMbdUiBAxLg9CFzG08sz2aqzknwiX7Hkl0bQENjg8iLByw==}
    engines: {node: '>=8'}

  detect-newline@3.1.0:
    resolution: {integrity: sha512-TLz+x/vEXm/Y7P7wn1EJFNLxYpUD4TgMosxY6fAVJUnJMbupHBOncxyWUG9OpTaH9EBD7uFI5LfEgmMOc54DsA==}
    engines: {node: '>=8'}

  detect-node-es@1.1.0:
    resolution: {integrity: sha512-ypdmJU/TbBby2Dxibuv7ZLW3Bs1QEmM7nHjEANfohJLvE0XVujisn1qPJcZxg+qDucsr+bP6fLD1rPS3AhJ7EQ==}

  devlop@1.1.0:
    resolution: {integrity: sha512-RWmIqhcFf1lRYBvNmr7qTNuyCt/7/ns2jbpp1+PalgE/rDQcBT0fioSMUpJ93irlUhC5hrg4cYqe6U+0ImW0rA==}

  didyoumean@1.2.2:
    resolution: {integrity: sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==}

  diff-sequences@29.6.3:
    resolution: {integrity: sha512-EjePK1srD3P08o2j4f0ExnylqRs5B9tJjcp9t1krH2qRi8CCdsYfwe9JgSLurFBWwq4uOlipzfk5fHNvwFKr8Q==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  dir-glob@3.0.1:
    resolution: {integrity: sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==}
    engines: {node: '>=8'}

  direction@2.0.1:
    resolution: {integrity: sha512-9S6m9Sukh1cZNknO1CWAr2QAWsbKLafQiyM5gZ7VgXHeuaoUwffKN4q6NC4A/Mf9iiPlOXQEKW/Mv/mh9/3YFA==}
    hasBin: true

  dlv@1.1.3:
    resolution: {integrity: sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==}

  doctrine@3.0.0:
    resolution: {integrity: sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==}
    engines: {node: '>=6.0.0'}

  dom-helpers@5.2.1:
    resolution: {integrity: sha512-nRCa7CK3VTrM2NmGkIy4cbK7IZlgBE/PYMn55rrXefr5xXDP0LdtfPnblFDoVdcAfslJ7or6iqAUnx0CCGIWQA==}

  dotenv@16.4.7:
    resolution: {integrity: sha512-47qPchRCykZC03FhkYAhrvwU4xDBFIj1QPqaarj6mdM/hgUzfPHcpkHJOn3mJAufFeeAxAzeGsr5X0M4k6fLZQ==}
    engines: {node: '>=12'}

  dunder-proto@1.0.1:
    resolution: {integrity: sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==}
    engines: {node: '>= 0.4'}

  eastasianwidth@0.2.0:
    resolution: {integrity: sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==}

  ecc-jsbn@0.1.2:
    resolution: {integrity: sha512-eh9O+hwRHNbG4BLTjEl3nw044CkGm5X6LoaCf7LPp7UU8Qrt47JYNi6nPX8xjW97TKGKm1ouctg0QSpZe9qrnw==}

  electron-to-chromium@1.5.112:
    resolution: {integrity: sha512-oen93kVyqSb3l+ziUgzIOlWt/oOuy4zRmpwestMn4rhFWAoFJeFuCVte9F2fASjeZZo7l/Cif9TiyrdW4CwEMA==}

  emittery@0.13.1:
    resolution: {integrity: sha512-DeWwawk6r5yR9jFgnDKYt4sLS0LmHJJi3ZOnb5/JdbYwj3nW+FxQnHIjhBKz8YLC7oRNPVM9NQ47I3CVx34eqQ==}
    engines: {node: '>=12'}

  emoji-regex@8.0.0:
    resolution: {integrity: sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==}

  emoji-regex@9.2.2:
    resolution: {integrity: sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==}

  end-of-stream@1.4.4:
    resolution: {integrity: sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==}

  entities@4.5.0:
    resolution: {integrity: sha512-V0hjH4dGPh9Ao5p0MoRY6BVqtwCjhz6vI5LT8AJ55H+4g9/4vbHx1I54fS0XuclLhDHArPQCiMjDxjaL8fPxhw==}
    engines: {node: '>=0.12'}

  error-ex@1.3.2:
    resolution: {integrity: sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==}

  es-abstract@1.23.9:
    resolution: {integrity: sha512-py07lI0wjxAC/DcfK1S6G7iANonniZwTISvdPzk9hzeH0IZIshbuuFxLIU96OyF89Yb9hiqWn8M/bY83KY5vzA==}
    engines: {node: '>= 0.4'}

  es-define-property@1.0.1:
    resolution: {integrity: sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==}
    engines: {node: '>= 0.4'}

  es-errors@1.3.0:
    resolution: {integrity: sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==}
    engines: {node: '>= 0.4'}

  es-object-atoms@1.1.1:
    resolution: {integrity: sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==}
    engines: {node: '>= 0.4'}

  es-set-tostringtag@2.1.0:
    resolution: {integrity: sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==}
    engines: {node: '>= 0.4'}

  es-shim-unscopables@1.1.0:
    resolution: {integrity: sha512-d9T8ucsEhh8Bi1woXCf+TIKDIROLG5WCkxg8geBCbvk22kzwC5G2OnXVMO6FUsvQlgUUXQ2itephWDLqDzbeCw==}
    engines: {node: '>= 0.4'}

  es-to-primitive@1.3.0:
    resolution: {integrity: sha512-w+5mJ3GuFL+NjVtJlvydShqE1eN3h3PbI7/5LAsYJP/2qtuMXjfL2LpHSRqo4b4eSF5K/DH1JXKUAHSB2UW50g==}
    engines: {node: '>= 0.4'}

  es6-promise@4.2.8:
    resolution: {integrity: sha512-HJDGx5daxeIvxdBxvG2cb9g4tEvwIk3i8+nhX0yGrYmZUzbkdg8QbDevheDB8gd0//uPj4c1EQua8Q+MViT0/w==}

  esbuild@0.21.5:
    resolution: {integrity: sha512-mg3OPMV4hXywwpoDxu3Qda5xCKQi+vCTZq8S9J/EpkhB2HzKXq4SNFZE3+NK93JYxc8VMSep+lOUSC/RVKaBqw==}
    engines: {node: '>=12'}
    hasBin: true

  esbuild@0.25.1:
    resolution: {integrity: sha512-BGO5LtrGC7vxnqucAe/rmvKdJllfGaYWdyABvyMoXQlfYMb2bbRuReWR5tEGE//4LcNJj9XrkovTqNYRFZHAMQ==}
    engines: {node: '>=18'}
    hasBin: true

  escalade@3.2.0:
    resolution: {integrity: sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==}
    engines: {node: '>=6'}

  escape-string-regexp@2.0.0:
    resolution: {integrity: sha512-UpzcLCXolUWcNu5HtVMHYdXJjArjsF9C0aNnquZYY4uW/Vu0miy5YoWvbV345HauVvcAUnpRuhMMcqTcGOY2+w==}
    engines: {node: '>=8'}

  escape-string-regexp@4.0.0:
    resolution: {integrity: sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==}
    engines: {node: '>=10'}

  escape-string-regexp@5.0.0:
    resolution: {integrity: sha512-/veY75JbMK4j1yjvuUxuVsiS/hr/4iHs9FTT6cgTexxdE0Ly/glccBAkloH/DofkjRbZU3bnoj38mOmhkZ0lHw==}
    engines: {node: '>=12'}

  eslint-plugin-react-hooks@4.6.2:
    resolution: {integrity: sha512-QzliNJq4GinDBcD8gPB5v0wh6g8q3SUi6EFF0x8N/BL9PoVs0atuGc47ozMRyOWAKdwaZ5OnbOEa3WR+dSGKuQ==}
    engines: {node: '>=10'}
    peerDependencies:
      eslint: ^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0

  eslint-plugin-react-refresh@0.4.19:
    resolution: {integrity: sha512-eyy8pcr/YxSYjBoqIFSrlbn9i/xvxUFa8CjzAYo9cFjgGXqq1hyjihcpZvxRLalpaWmueWR81xn7vuKmAFijDQ==}
    peerDependencies:
      eslint: '>=8.40'

  eslint-scope@7.2.2:
    resolution: {integrity: sha512-dOt21O7lTMhDM+X9mB4GX+DZrZtCUJPL/wlcTqxyrx5IvO0IYtILdtrQGQp+8n5S0gwSVmOf9NQrjMOgfQZlIg==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}

  eslint-visitor-keys@3.4.3:
    resolution: {integrity: sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}

  eslint@8.57.1:
    resolution: {integrity: sha512-ypowyDxpVSYpkXr9WPv2PAZCtNip1Mv5KTW0SCurXv/9iOpcrH9PaqUElksqEB6pChqHGDRCFTyrZlGhnLNGiA==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    deprecated: This version is no longer supported. Please see https://eslint.org/version-support for other options.
    hasBin: true

  espree@9.6.1:
    resolution: {integrity: sha512-oruZaFkjorTpF32kDSI5/75ViwGeZginGGy2NoOSg3Q9bnwlnmDm4HLnkl0RE3n+njDXR037aY1+x58Z/zFdwQ==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}

  esprima@4.0.1:
    resolution: {integrity: sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==}
    engines: {node: '>=4'}
    hasBin: true

  esquery@1.6.0:
    resolution: {integrity: sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==}
    engines: {node: '>=0.10'}

  esrecurse@4.3.0:
    resolution: {integrity: sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==}
    engines: {node: '>=4.0'}

  estraverse@5.3.0:
    resolution: {integrity: sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==}
    engines: {node: '>=4.0'}

  estree-util-is-identifier-name@3.0.0:
    resolution: {integrity: sha512-hFtqIDZTIUZ9BXLb8y4pYGyk6+wekIivNVTcmvk8NoOh+VeRn5y6cEHzbURrWbfp1fIqdVipilzj+lfaadNZmg==}

  esutils@2.0.3:
    resolution: {integrity: sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==}
    engines: {node: '>=0.10.0'}

  eventemitter3@3.1.2:
    resolution: {integrity: sha512-tvtQIeLVHjDkJYnzf2dgVMxfuSGJeM/7UCG17TT4EumTfNtF+0nebF/4zWOIkCreAbtNqhGEboB6BWrwqNaw4Q==}

  execa@5.1.1:
    resolution: {integrity: sha512-8uSpZZocAZRBAPIEINJj3Lo9HyGitllczc27Eh5YYojjMFMn8yHMDMaUHE2Jqfq05D/wucwI4JGURyXt1vchyg==}
    engines: {node: '>=10'}

  exit@0.1.2:
    resolution: {integrity: sha512-Zk/eNKV2zbjpKzrsQ+n1G6poVbErQxJ0LBOJXaKZ1EViLzH+hrLu9cdXI4zw9dBQJslwBEpbQ2P1oS7nDxs6jQ==}
    engines: {node: '>= 0.8.0'}

  expect@29.7.0:
    resolution: {integrity: sha512-2Zks0hf1VLFYI1kbh0I5jP3KHHyCHpkfyHBzsSXRFgl/Bg9mWYfMW8oD+PdMPlEwy5HNsR9JutYy6pMeOh61nw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  extend@3.0.2:
    resolution: {integrity: sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==}

  extsprintf@1.3.0:
    resolution: {integrity: sha512-11Ndz7Nv+mvAC1j0ktTa7fAb0vLyGGX+rMHNBYQviQDGU0Hw7lhctJANqbPhu9nV9/izT/IntTgZ7Im/9LJs9g==}
    engines: {'0': node >=0.6.0}

  fast-deep-equal@3.1.3:
    resolution: {integrity: sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==}

  fast-glob@3.3.3:
    resolution: {integrity: sha512-7MptL8U0cqcFdzIzwOTHoilX9x5BrNqye7Z/LuC7kCMRio1EMSyqRK3BEAUD7sXRq4iT4AzTVuZdhgQ2TCvYLg==}
    engines: {node: '>=8.6.0'}

  fast-json-stable-stringify@2.1.0:
    resolution: {integrity: sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==}

  fast-levenshtein@2.0.6:
    resolution: {integrity: sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==}

  fast-sha256@1.3.0:
    resolution: {integrity: sha512-n11RGP/lrWEFI/bWdygLxhI+pVeo1ZYIVwvvPkW7azl/rOy+F3HYRZ2K5zeE9mmkhQppyv9sQFx0JM9UabnpPQ==}

  fastq@1.19.1:
    resolution: {integrity: sha512-GwLTyxkCXjXbxqIhTsMI2Nui8huMPtnxg7krajPJAjnEG/iiOS7i+zCtWGZR9G0NBKbXKh6X9m9UIsYX/N6vvQ==}

  fault@1.0.4:
    resolution: {integrity: sha512-CJ0HCB5tL5fYTEA7ToAq5+kTwd++Borf1/bifxd9iT70QcXr4MRrO3Llf8Ifs70q+SJcGHFtnIE/Nw6giCtECA==}

  fb-watchman@2.0.2:
    resolution: {integrity: sha512-p5161BqbuCaSnB8jIbzQHOlpgsPmK5rJVDfDKO91Axs5NC1uu3HRQm6wt9cd9/+GtQQIO53JdGXXoyDpTAsgYA==}

  file-entry-cache@6.0.1:
    resolution: {integrity: sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==}
    engines: {node: ^10.12.0 || >=12.0.0}

  file-selector@2.1.2:
    resolution: {integrity: sha512-QgXo+mXTe8ljeqUFaX3QVHc5osSItJ/Km+xpocx0aSqWGMSCf6qYs/VnzZgS864Pjn5iceMRFigeAV7AfTlaig==}
    engines: {node: '>= 12'}

  file-type@3.9.0:
    resolution: {integrity: sha512-RLoqTXE8/vPmMuTI88DAzhMYC99I8BWv7zYP4A1puo5HIjEJ5EX48ighy4ZyKMG9EDXxBgW6e++cn7d1xuFghA==}
    engines: {node: '>=0.10.0'}

  fill-range@7.1.1:
    resolution: {integrity: sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==}
    engines: {node: '>=8'}

  find-root@1.1.0:
    resolution: {integrity: sha512-NKfW6bec6GfKc0SGx1e07QZY9PE99u0Bft/0rzSD5k3sO/vwkVUpDUKVm5Gpp5Ue3YfShPFTX2070tDs5kB9Ng==}

  find-up@4.1.0:
    resolution: {integrity: sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==}
    engines: {node: '>=8'}

  find-up@5.0.0:
    resolution: {integrity: sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==}
    engines: {node: '>=10'}

  flat-cache@3.2.0:
    resolution: {integrity: sha512-CYcENa+FtcUKLmhhqyctpclsq7QF38pKjZHsGNiSQF5r4FtoKDWabFDl3hzaEQMvT1LHEysw5twgLvpYYb4vbw==}
    engines: {node: ^10.12.0 || >=12.0.0}

  flatted@3.3.3:
    resolution: {integrity: sha512-GX+ysw4PBCz0PzosHDepZGANEuFCMLrnRTiEy9McGjmkCQYwRq4A/X786G/fjM/+OjsWSU1ZrY5qyARZmO/uwg==}

  follow-redirects@1.15.9:
    resolution: {integrity: sha512-gew4GsXizNgdoRyqmyfMHyAmXsZDk6mHkSxZFCzW9gwlbtOW44CDtYavM+y+72qD/Vq2l550kMF52DT8fOLJqQ==}
    engines: {node: '>=4.0'}
    peerDependencies:
      debug: '*'
    peerDependenciesMeta:
      debug:
        optional: true

  for-each@0.3.5:
    resolution: {integrity: sha512-dKx12eRCVIzqCxFGplyFKJMPvLEWgmNtUrpTiJIR5u97zEhRG8ySrtboPHZXx7daLxQVrl643cTzbab2tkQjxg==}
    engines: {node: '>= 0.4'}

  foreground-child@3.3.1:
    resolution: {integrity: sha512-gIXjKqtFuWEgzFRJA9WCQeSJLZDjgJUOMCMzxtvFq/37KojM1BFGufqsCy0r4qSQmYLsZYMeyRqzIWOMup03sw==}
    engines: {node: '>=14'}

  forever-agent@0.6.1:
    resolution: {integrity: sha512-j0KLYPhm6zeac4lz3oJ3o65qvgQCcPubiyotZrXqEaG4hNagNYO8qdlUrX5vwqv9ohqeT/Z3j6+yW067yWWdUw==}

  form-data@2.3.3:
    resolution: {integrity: sha512-1lLKB2Mu3aGP1Q/2eCOx0fNbRMe7XdwktwOruhfqqd0rIJWwN4Dh+E3hrPSlDCXnSR7UtZ1N38rVXm+6+MEhJQ==}
    engines: {node: '>= 0.12'}

  form-data@2.5.3:
    resolution: {integrity: sha512-XHIrMD0NpDrNM/Ckf7XJiBbLl57KEhT3+i3yY+eWm+cqYZJQTZrKo8Y8AWKnuV5GT4scfuUGt9LzNoIx3dU1nQ==}
    engines: {node: '>= 0.12'}

  form-data@4.0.2:
    resolution: {integrity: sha512-hGfm/slu0ZabnNt4oaRZ6uREyfCj6P4fT/n6A1rGV+Z0VdGXjfOhVUpkn6qVQONHGIFwmveGXyDs75+nr6FM8w==}
    engines: {node: '>= 6'}

  format@0.2.2:
    resolution: {integrity: sha512-wzsgA6WOq+09wrU1tsJ09udeR/YZRaeArL9e1wPbFg3GG2yDnC2ldKpxs4xunpFF9DgqCqOIra3bc1HWrJ37Ww==}
    engines: {node: '>=0.4.x'}

  fraction.js@4.3.7:
    resolution: {integrity: sha512-ZsDfxO51wGAXREY55a7la9LScWpwv9RxIrYABrlvOFBlH/ShPnrtsXeuUIfXKKOVicNxQ+o8JTbJvjS4M89yew==}

  framer-motion@11.18.2:
    resolution: {integrity: sha512-5F5Och7wrvtLVElIpclDT0CBzMVg3dL22B64aZwHtsIY8RB4mXICLrkajK4G9R+ieSAGcgrLeae2SeUTg2pr6w==}
    peerDependencies:
      '@emotion/is-prop-valid': '*'
      react: ^18.0.0 || ^19.0.0
      react-dom: ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@emotion/is-prop-valid':
        optional: true
      react:
        optional: true
      react-dom:
        optional: true

  fs.realpath@1.0.0:
    resolution: {integrity: sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==}

  fsevents@2.3.3:
    resolution: {integrity: sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==}
    engines: {node: ^8.16.0 || ^10.6.0 || >=11.0.0}
    os: [darwin]

  function-bind@1.1.2:
    resolution: {integrity: sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==}

  function.prototype.name@1.1.8:
    resolution: {integrity: sha512-e5iwyodOHhbMr/yNrc7fDYG4qlbIvI5gajyzPnb5TCwyhjApznQh1BMFou9b30SevY43gCJKXycoCBjMbsuW0Q==}
    engines: {node: '>= 0.4'}

  functions-have-names@1.2.3:
    resolution: {integrity: sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==}

  gensync@1.0.0-beta.2:
    resolution: {integrity: sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==}
    engines: {node: '>=6.9.0'}

  get-caller-file@2.0.5:
    resolution: {integrity: sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==}
    engines: {node: 6.* || 8.* || >= 10.*}

  get-intrinsic@1.3.0:
    resolution: {integrity: sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==}
    engines: {node: '>= 0.4'}

  get-nonce@1.0.1:
    resolution: {integrity: sha512-FJhYRoDaiatfEkUK8HKlicmu/3SGFD51q3itKDGoSTysQJBnfOcxU5GxnhE1E6soB76MbT0MBtnKJuXyAx+96Q==}
    engines: {node: '>=6'}

  get-package-type@0.1.0:
    resolution: {integrity: sha512-pjzuKtY64GYfWizNAJ0fr9VqttZkNiK2iS430LtIHzjBEr6bX8Am2zm4sW4Ro5wjWW5cAlRL1qAMTcXbjNAO2Q==}
    engines: {node: '>=8.0.0'}

  get-proto@1.0.1:
    resolution: {integrity: sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==}
    engines: {node: '>= 0.4'}

  get-stream@6.0.1:
    resolution: {integrity: sha512-ts6Wi+2j3jQjqi70w5AlN8DFnkSwC+MqmxEzdEALB2qXZYV3X/b1CTfgPLGJNMeAWxdPfU8FO1ms3NUfaHCPYg==}
    engines: {node: '>=10'}

  get-symbol-description@1.1.0:
    resolution: {integrity: sha512-w9UMqWwJxHNOvoNzSJ2oPF5wvYcvP7jUvYzhp67yEhTi17ZDBBC1z9pTdGuzjD+EFIqLSYRweZjqfiPzQ06Ebg==}
    engines: {node: '>= 0.4'}

  getpass@0.1.7:
    resolution: {integrity: sha512-0fzj9JxOLfJ+XGLhR8ze3unN0KZCgZwiSSDz168VERjK8Wl8kVSdcu2kspd4s4wtAa1y/qrVRiAA0WclVsu0ng==}

  github-slugger@2.0.0:
    resolution: {integrity: sha512-IaOQ9puYtjrkq7Y0Ygl9KDZnrf/aiUJYUpVf89y8kyaxbRG7Y1SrX/jaumrv81vc61+kiMempujsM3Yw7w5qcw==}

  glob-parent@5.1.2:
    resolution: {integrity: sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==}
    engines: {node: '>= 6'}

  glob-parent@6.0.2:
    resolution: {integrity: sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==}
    engines: {node: '>=10.13.0'}

  glob-to-regexp@0.4.1:
    resolution: {integrity: sha512-lkX1HJXwyMcprw/5YUZc2s7DrpAiHB21/V+E1rHUrVNokkvB6bqMzT0VfV6/86ZNabt1k14YOIaT7nDvOX3Iiw==}

  glob@10.4.5:
    resolution: {integrity: sha512-7Bv8RF0k6xjo7d4A/PxYLbUCfb6c+Vpd2/mB2yRDlew7Jb5hEXiCD9ibfO7wpk8i4sevK6DFny9h7EYbM3/sHg==}
    hasBin: true

  glob@7.2.3:
    resolution: {integrity: sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==}
    deprecated: Glob versions prior to v9 are no longer supported

  globals@11.12.0:
    resolution: {integrity: sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==}
    engines: {node: '>=4'}

  globals@13.24.0:
    resolution: {integrity: sha512-AhO5QUcj8llrbG09iWhPU2B204J1xnPeL8kQmVorSsy+Sjj1sk8gIyh6cUocGmH4L0UuhAJy+hJMRA4mgA4mFQ==}
    engines: {node: '>=8'}

  globalthis@1.0.4:
    resolution: {integrity: sha512-DpLKbNU4WylpxJykQujfCcwYWiV/Jhm50Goo0wrVILAv5jOr9d+H+UR3PhSCD2rCCEIg0uc+G+muBTwD54JhDQ==}
    engines: {node: '>= 0.4'}

  globby@11.1.0:
    resolution: {integrity: sha512-jhIXaOzy1sb8IyocaruWSn1TjmnBVs8Ayhcy83rmxNJ8q2uWKCAj3CnJY+KpGSXCueAPc0i05kVvVKtP1t9S3g==}
    engines: {node: '>=10'}

  goober@2.1.16:
    resolution: {integrity: sha512-erjk19y1U33+XAMe1VTvIONHYoSqE4iS7BYUZfHaqeohLmnC0FdxEh7rQU+6MZ4OajItzjZFSRtVANrQwNq6/g==}
    peerDependencies:
      csstype: ^3.0.10

  gopd@1.2.0:
    resolution: {integrity: sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==}
    engines: {node: '>= 0.4'}

  graceful-fs@4.2.11:
    resolution: {integrity: sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==}

  graphemer@1.4.0:
    resolution: {integrity: sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==}

  har-schema@2.0.0:
    resolution: {integrity: sha512-Oqluz6zhGX8cyRaTQlFMPw80bSJVG2x/cFb8ZPhUILGgHka9SsokCCOQgpveePerqidZOrT14ipqfJb7ILcW5Q==}
    engines: {node: '>=4'}

  har-validator@5.1.5:
    resolution: {integrity: sha512-nmT2T0lljbxdQZfspsno9hgrG3Uir6Ks5afism62poxqBM6sDnMEuPmzTq8XN0OEwqKLLdh1jQI3qyE66Nzb3w==}
    engines: {node: '>=6'}
    deprecated: this library is no longer supported

  has-bigints@1.1.0:
    resolution: {integrity: sha512-R3pbpkcIqv2Pm3dUwgjclDRVmWpTJW2DcMzcIhEXEx1oh/CEMObMm3KLmRJOdvhM7o4uQBnwr8pzRK2sJWIqfg==}
    engines: {node: '>= 0.4'}

  has-flag@4.0.0:
    resolution: {integrity: sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==}
    engines: {node: '>=8'}

  has-property-descriptors@1.0.2:
    resolution: {integrity: sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==}

  has-proto@1.2.0:
    resolution: {integrity: sha512-KIL7eQPfHQRC8+XluaIw7BHUwwqL19bQn4hzNgdr+1wXoU0KKj6rufu47lhY7KbJR2C6T6+PfyN0Ea7wkSS+qQ==}
    engines: {node: '>= 0.4'}

  has-symbols@1.1.0:
    resolution: {integrity: sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==}
    engines: {node: '>= 0.4'}

  has-tostringtag@1.0.2:
    resolution: {integrity: sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==}
    engines: {node: '>= 0.4'}

  hasown@2.0.2:
    resolution: {integrity: sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==}
    engines: {node: '>= 0.4'}

  hast-util-from-html@2.0.3:
    resolution: {integrity: sha512-CUSRHXyKjzHov8yKsQjGOElXy/3EKpyX56ELnkHH34vDVw1N1XSQ1ZcAvTyAPtGqLTuKP/uxM+aLkSPqF/EtMw==}

  hast-util-from-parse5@8.0.3:
    resolution: {integrity: sha512-3kxEVkEKt0zvcZ3hCRYI8rqrgwtlIOFMWkbclACvjlDw8Li9S2hk/d51OI0nr/gIpdMHNepwgOKqZ/sy0Clpyg==}

  hast-util-has-property@3.0.0:
    resolution: {integrity: sha512-MNilsvEKLFpV604hwfhVStK0usFY/QmM5zX16bo7EjnAEGofr5YyI37kzopBlZJkHD4t887i+q/C8/tr5Q94cA==}

  hast-util-heading-rank@3.0.0:
    resolution: {integrity: sha512-EJKb8oMUXVHcWZTDepnr+WNbfnXKFNf9duMesmr4S8SXTJBJ9M4Yok08pu9vxdJwdlGRhVumk9mEhkEvKGifwA==}

  hast-util-is-element@3.0.0:
    resolution: {integrity: sha512-Val9mnv2IWpLbNPqc/pUem+a7Ipj2aHacCwgNfTiK0vJKl0LF+4Ba4+v1oPHFpf3bLYmreq0/l3Gud9S5OH42g==}

  hast-util-parse-selector@2.2.5:
    resolution: {integrity: sha512-7j6mrk/qqkSehsM92wQjdIgWM2/BW61u/53G6xmC8i1OmEdKLHbk419QKQUjz6LglWsfqoiHmyMRkP1BGjecNQ==}

  hast-util-parse-selector@3.1.1:
    resolution: {integrity: sha512-jdlwBjEexy1oGz0aJ2f4GKMaVKkA9jwjr4MjAAI22E5fM/TXVZHuS5OpONtdeIkRKqAaryQ2E9xNQxijoThSZA==}

  hast-util-parse-selector@4.0.0:
    resolution: {integrity: sha512-wkQCkSYoOGCRKERFWcxMVMOcYE2K1AaNLU8DXS9arxnLOUEWbOXKXiJUNzEpqZ3JOKpnha3jkFrumEjVliDe7A==}

  hast-util-raw@9.1.0:
    resolution: {integrity: sha512-Y8/SBAHkZGoNkpzqqfCldijcuUKh7/su31kEBp67cFY09Wy0mTRgtsLYsiIxMJxlu0f6AA5SUTbDR8K0rxnbUw==}

  hast-util-sanitize@5.0.2:
    resolution: {integrity: sha512-3yTWghByc50aGS7JlGhk61SPenfE/p1oaFeNwkOOyrscaOkMGrcW9+Cy/QAIOBpZxP1yqDIzFMR0+Np0i0+usg==}

  hast-util-select@6.0.4:
    resolution: {integrity: sha512-RqGS1ZgI0MwxLaKLDxjprynNzINEkRHY2i8ln4DDjgv9ZhcYVIHN9rlpiYsqtFwrgpYU361SyWDQcGNIBVu3lw==}

  hast-util-to-html@9.0.5:
    resolution: {integrity: sha512-OguPdidb+fbHQSU4Q4ZiLKnzWo8Wwsf5bZfbvu7//a9oTYoqD/fWpe96NuHkoS9h0ccGOTe0C4NGXdtS0iObOw==}

  hast-util-to-jsx-runtime@2.3.6:
    resolution: {integrity: sha512-zl6s8LwNyo1P9uw+XJGvZtdFF1GdAkOg8ujOw+4Pyb76874fLps4ueHXDhXWdk6YHQ6OgUtinliG7RsYvCbbBg==}

  hast-util-to-parse5@8.0.0:
    resolution: {integrity: sha512-3KKrV5ZVI8if87DVSi1vDeByYrkGzg4mEfeu4alwgmmIeARiBLKCZS2uw5Gb6nU9x9Yufyj3iudm6i7nl52PFw==}

  hast-util-to-string@3.0.1:
    resolution: {integrity: sha512-XelQVTDWvqcl3axRfI0xSeoVKzyIFPwsAGSLIsKdJKQMXDYJS4WYrBNF/8J7RdhIcFI2BOHgAifggsvsxp/3+A==}

  hast-util-whitespace@3.0.0:
    resolution: {integrity: sha512-88JUN06ipLwsnv+dVn+OIYOvAuvBMy/Qoi6O7mQHxdPXpjy+Cd6xRkWwux7DKO+4sYILtLBRIKgsdpS2gQc7qw==}

  hastscript@6.0.0:
    resolution: {integrity: sha512-nDM6bvd7lIqDUiYEiu5Sl/+6ReP0BMk/2f4U/Rooccxkj0P5nm+acM5PrGJ/t5I8qPGiqZSE6hVAwZEdZIvP4w==}

  hastscript@7.2.0:
    resolution: {integrity: sha512-TtYPq24IldU8iKoJQqvZOuhi5CyCQRAbvDOX0x1eW6rsHSxa/1i2CCiptNTotGHJ3VoHRGmqiv6/D3q113ikkw==}

  hastscript@9.0.1:
    resolution: {integrity: sha512-g7df9rMFX/SPi34tyGCyUBREQoKkapwdY/T04Qn9TDWfHhAYt4/I0gMVirzK5wEzeUqIjEB+LXC/ypb7Aqno5w==}

  highlight.js@10.7.3:
    resolution: {integrity: sha512-tzcUFauisWKNHaRkN4Wjl/ZA07gENAjFl3J/c480dprkGTg5EQstgaNFqBfUqCq54kZRIEcreTsAgF/m2quD7A==}

  highlightjs-vue@1.0.0:
    resolution: {integrity: sha512-PDEfEF102G23vHmPhLyPboFCD+BkMGu+GuJe2d9/eH4FsCwvgBpnc9n0pGE+ffKdph38s6foEZiEjdgHdzp+IA==}

  hoist-non-react-statics@3.3.2:
    resolution: {integrity: sha512-/gGivxi8JPKWNm/W0jSmzcMPpfpPLc3dY/6GxhX2hQ9iGj3aDfklV4ET7NjKpSinLpJ5vafa9iiGIEZg10SfBw==}

  html-escaper@2.0.2:
    resolution: {integrity: sha512-H2iMtd0I4Mt5eYiapRdIDjp+XzelXQ0tFE4JS7YFwFevXXMmOp9myNrUvCg0D6ws8iqkRPBfKHgbwig1SmlLfg==}

  html-url-attributes@3.0.1:
    resolution: {integrity: sha512-ol6UPyBWqsrO6EJySPz2O7ZSr856WDrEzM5zMqp+FJJLGMW35cLYmmZnl0vztAZxRUoNZJFTCohfjuIJ8I4QBQ==}

  html-void-elements@3.0.0:
    resolution: {integrity: sha512-bEqo66MRXsUGxWHV5IP0PUiAWwoEjba4VCzg0LjFJBpchPaTfyfCKTG6bc5F8ucKec3q5y6qOdGyYTSBEvhCrg==}

  http-signature@1.2.0:
    resolution: {integrity: sha512-CAbnr6Rz4CYQkLYUtSNXxQPUH2gK8f3iWexVlsnMeD+GjlsQ0Xsy1cOX+mN3dtxYomRy21CiOzU8Uhw6OwncEQ==}
    engines: {node: '>=0.8', npm: '>=1.3.7'}

  http-signature@1.4.0:
    resolution: {integrity: sha512-G5akfn7eKbpDN+8nPS/cb57YeA1jLTVxjpCj7tmm3QKPdyDy7T+qSC40e9ptydSWvkwjSXw1VbkpyEm39ukeAg==}
    engines: {node: '>=0.10'}

  human-signals@2.1.0:
    resolution: {integrity: sha512-B4FFZ6q/T2jhhksgkbEW3HBvWIfDW85snkQgawt07S7J5QXTk6BkNV+0yAeZrM5QpMAdYlocGoljn0sJ/WQkFw==}
    engines: {node: '>=10.17.0'}

  ignore@5.3.2:
    resolution: {integrity: sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==}
    engines: {node: '>= 4'}

  import-fresh@3.3.1:
    resolution: {integrity: sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==}
    engines: {node: '>=6'}

  import-local@3.2.0:
    resolution: {integrity: sha512-2SPlun1JUPWoM6t3F0dw0FkCF/jWY8kttcY4f599GLTSjh2OCuuhdTkJQsEcZzBqbXZGKMK2OqW1oZsjtf/gQA==}
    engines: {node: '>=8'}
    hasBin: true

  imurmurhash@0.1.4:
    resolution: {integrity: sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==}
    engines: {node: '>=0.8.19'}

  inflight@1.0.6:
    resolution: {integrity: sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==}
    deprecated: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.

  inherits@2.0.4:
    resolution: {integrity: sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==}

  inline-style-parser@0.2.4:
    resolution: {integrity: sha512-0aO8FkhNZlj/ZIbNi7Lxxr12obT7cL1moPfE4tg1LkX7LlLfC6DeX4l2ZEud1ukP9jNQyNnfzQVqwbwmAATY4Q==}

  internal-slot@1.1.0:
    resolution: {integrity: sha512-4gd7VpWNQNB4UKKCFFVcp1AVv+FMOgs9NKzjHKusc8jTMhd5eL1NqQqOpE0KzMds804/yHlglp3uxgluOqAPLw==}
    engines: {node: '>= 0.4'}

  invariant@2.2.4:
    resolution: {integrity: sha512-phJfQVBuaJM5raOpJjSfkiD6BpbCE4Ns//LaXl6wGYtUBY83nWS6Rf9tXm2e8VaK60JEjYldbPif/A2B1C2gNA==}

  is-alphabetical@1.0.4:
    resolution: {integrity: sha512-DwzsA04LQ10FHTZuL0/grVDk4rFoVH1pjAToYwBrHSxcrBIGQuXrQMtD5U1b0U2XVgKZCTLLP8u2Qxqhy3l2Vg==}

  is-alphabetical@2.0.1:
    resolution: {integrity: sha512-FWyyY60MeTNyeSRpkM2Iry0G9hpr7/9kD40mD/cGQEuilcZYS4okz8SN2Q6rLCJ8gbCt6fN+rC+6tMGS99LaxQ==}

  is-alphanumerical@1.0.4:
    resolution: {integrity: sha512-UzoZUr+XfVz3t3v4KyGEniVL9BDRoQtY7tOyrRybkVNjDFWyo1yhXNGrrBTQxp3ib9BLAWs7k2YKBQsFRkZG9A==}

  is-alphanumerical@2.0.1:
    resolution: {integrity: sha512-hmbYhX/9MUMF5uh7tOXyK/n0ZvWpad5caBA17GsC6vyuCqaWliRG5K1qS9inmUhEMaOBIW7/whAnSwveW/LtZw==}

  is-array-buffer@3.0.5:
    resolution: {integrity: sha512-DDfANUiiG2wC1qawP66qlTugJeL5HyzMpfr8lLK+jMQirGzNod0B12cFB/9q838Ru27sBwfw78/rdoU7RERz6A==}
    engines: {node: '>= 0.4'}

  is-arrayish@0.2.1:
    resolution: {integrity: sha512-zz06S8t0ozoDXMG+ube26zeCTNXcKIPJZJi8hBrF4idCLms4CG9QtK7qBl1boi5ODzFpjswb5JPmHCbMpjaYzg==}

  is-arrayish@0.3.2:
    resolution: {integrity: sha512-eVRqCvVlZbuw3GrM63ovNSNAeA1K16kaR/LRY/92w0zxQ5/1YzwblUX652i4Xs9RwAGjW9d9y6X88t8OaAJfWQ==}

  is-async-function@2.1.1:
    resolution: {integrity: sha512-9dgM/cZBnNvjzaMYHVoxxfPj2QXt22Ev7SuuPrs+xav0ukGB0S6d4ydZdEiM48kLx5kDV+QBPrpVnFyefL8kkQ==}
    engines: {node: '>= 0.4'}

  is-bigint@1.1.0:
    resolution: {integrity: sha512-n4ZT37wG78iz03xPRKJrHTdZbe3IicyucEtdRsV5yglwc3GyUfbAfpSeD0FJ41NbUNSt5wbhqfp1fS+BgnvDFQ==}
    engines: {node: '>= 0.4'}

  is-binary-path@2.1.0:
    resolution: {integrity: sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==}
    engines: {node: '>=8'}

  is-boolean-object@1.2.2:
    resolution: {integrity: sha512-wa56o2/ElJMYqjCjGkXri7it5FbebW5usLw/nPmCMs5DeZ7eziSYZhSmPRn0txqeW4LnAmQQU7FgqLpsEFKM4A==}
    engines: {node: '>= 0.4'}

  is-buffer@1.1.6:
    resolution: {integrity: sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w==}

  is-callable@1.2.7:
    resolution: {integrity: sha512-1BC0BVFhS/p0qtw6enp8e+8OD0UrK0oFLztSjNzhcKA3WDuJxxAPXzPuPtKkjEY9UUoEWlX/8fgKeu2S8i9JTA==}
    engines: {node: '>= 0.4'}

  is-core-module@2.16.1:
    resolution: {integrity: sha512-UfoeMA6fIJ8wTYFEUjelnaGI67v6+N7qXJEvQuIGa99l4xsCruSYOVSQ0uPANn4dAzm8lkYPaKLrrijLq7x23w==}
    engines: {node: '>= 0.4'}

  is-data-view@1.0.2:
    resolution: {integrity: sha512-RKtWF8pGmS87i2D6gqQu/l7EYRlVdfzemCJN/P3UOs//x1QE7mfhvzHIApBTRf7axvT6DMGwSwBXYCT0nfB9xw==}
    engines: {node: '>= 0.4'}

  is-date-object@1.1.0:
    resolution: {integrity: sha512-PwwhEakHVKTdRNVOw+/Gyh0+MzlCl4R6qKvkhuvLtPMggI1WAHt9sOwZxQLSGpUaDnrdyDsomoRgNnCfKNSXXg==}
    engines: {node: '>= 0.4'}

  is-decimal@1.0.4:
    resolution: {integrity: sha512-RGdriMmQQvZ2aqaQq3awNA6dCGtKpiDFcOzrTWrDAT2MiWrKQVPmxLGHl7Y2nNu6led0kEyoX0enY0qXYsv9zw==}

  is-decimal@2.0.1:
    resolution: {integrity: sha512-AAB9hiomQs5DXWcRB1rqsxGUstbRroFOPPVAomNk/3XHR5JyEZChOyTWe2oayKnsSsr/kcGqF+z6yuH6HHpN0A==}

  is-extglob@2.1.1:
    resolution: {integrity: sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==}
    engines: {node: '>=0.10.0'}

  is-finalizationregistry@1.1.1:
    resolution: {integrity: sha512-1pC6N8qWJbWoPtEjgcL2xyhQOP491EQjeUo3qTKcmV8YSDDJrOepfG8pcC7h/QgnQHYSv0mJ3Z/ZWxmatVrysg==}
    engines: {node: '>= 0.4'}

  is-fullwidth-code-point@3.0.0:
    resolution: {integrity: sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==}
    engines: {node: '>=8'}

  is-generator-fn@2.1.0:
    resolution: {integrity: sha512-cTIB4yPYL/Grw0EaSzASzg6bBy9gqCofvWN8okThAYIxKJZC+udlRAmGbM0XLeniEJSs8uEgHPGuHSe1XsOLSQ==}
    engines: {node: '>=6'}

  is-generator-function@1.1.0:
    resolution: {integrity: sha512-nPUB5km40q9e8UfN/Zc24eLlzdSf9OfKByBw9CIdw4H1giPMeA0OIJvbchsCu4npfI2QcMVBsGEBHKZ7wLTWmQ==}
    engines: {node: '>= 0.4'}

  is-glob@4.0.3:
    resolution: {integrity: sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==}
    engines: {node: '>=0.10.0'}

  is-hexadecimal@1.0.4:
    resolution: {integrity: sha512-gyPJuv83bHMpocVYoqof5VDiZveEoGoFL8m3BXNb2VW8Xs+rz9kqO8LOQ5DH6EsuvilT1ApazU0pyl+ytbPtlw==}

  is-hexadecimal@2.0.1:
    resolution: {integrity: sha512-DgZQp241c8oO6cA1SbTEWiXeoxV42vlcJxgH+B3hi1AiqqKruZR3ZGF8In3fj4+/y/7rHvlOZLZtgJ/4ttYGZg==}

  is-map@2.0.3:
    resolution: {integrity: sha512-1Qed0/Hr2m+YqxnM09CjA2d/i6YZNfF6R2oRAOj36eUdS6qIV/huPJNSEpKbupewFs+ZsJlxsjjPbc0/afW6Lw==}
    engines: {node: '>= 0.4'}

  is-number-object@1.1.1:
    resolution: {integrity: sha512-lZhclumE1G6VYD8VHe35wFaIif+CTy5SJIi5+3y4psDgWu4wPDoBhF8NxUOinEc7pHgiTsT6MaBb92rKhhD+Xw==}
    engines: {node: '>= 0.4'}

  is-number@7.0.0:
    resolution: {integrity: sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==}
    engines: {node: '>=0.12.0'}

  is-path-inside@3.0.3:
    resolution: {integrity: sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==}
    engines: {node: '>=8'}

  is-plain-obj@4.1.0:
    resolution: {integrity: sha512-+Pgi+vMuUNkJyExiMBt5IlFoMyKnr5zhJ4Uspz58WOhBF5QoIZkFyNHIbBAtHwzVAgk5RtndVNsDRN61/mmDqg==}
    engines: {node: '>=12'}

  is-regex@1.2.1:
    resolution: {integrity: sha512-MjYsKHO5O7mCsmRGxWcLWheFqN9DJ/2TmngvjKXihe6efViPqc274+Fx/4fYj/r03+ESvBdTXK0V6tA3rgez1g==}
    engines: {node: '>= 0.4'}

  is-set@2.0.3:
    resolution: {integrity: sha512-iPAjerrse27/ygGLxw+EBR9agv9Y6uLeYVJMu+QNCoouJ1/1ri0mGrcWpfCqFZuzzx3WjtwxG098X+n4OuRkPg==}
    engines: {node: '>= 0.4'}

  is-shared-array-buffer@1.0.4:
    resolution: {integrity: sha512-ISWac8drv4ZGfwKl5slpHG9OwPNty4jOWPRIhBpxOoD+hqITiwuipOQ2bNthAzwA3B4fIjO4Nln74N0S9byq8A==}
    engines: {node: '>= 0.4'}

  is-stream@2.0.1:
    resolution: {integrity: sha512-hFoiJiTl63nn+kstHGBtewWSKnQLpyb155KHheA1l39uvtO9nWIop1p3udqPcUd/xbF1VLMO4n7OI6p7RbngDg==}
    engines: {node: '>=8'}

  is-string@1.1.1:
    resolution: {integrity: sha512-BtEeSsoaQjlSPBemMQIrY1MY0uM6vnS1g5fmufYOtnxLGUZM2178PKbhsk7Ffv58IX+ZtcvoGwccYsh0PglkAA==}
    engines: {node: '>= 0.4'}

  is-symbol@1.1.1:
    resolution: {integrity: sha512-9gGx6GTtCQM73BgmHQXfDmLtfjjTUDSyoxTCbp5WtoixAhfgsDirWIcVQ/IHpvI5Vgd5i/J5F7B9cN/WlVbC/w==}
    engines: {node: '>= 0.4'}

  is-typed-array@1.1.15:
    resolution: {integrity: sha512-p3EcsicXjit7SaskXHs1hA91QxgTw46Fv6EFKKGS5DRFLD8yKnohjF3hxoju94b/OcMZoQukzpPpBE9uLVKzgQ==}
    engines: {node: '>= 0.4'}

  is-typedarray@1.0.0:
    resolution: {integrity: sha512-cyA56iCMHAh5CdzjJIa4aohJyeO1YbwLi3Jc35MmRU6poroFjIGZzUzupGiRPOjgHg9TLu43xbpwXk523fMxKA==}

  is-weakmap@2.0.2:
    resolution: {integrity: sha512-K5pXYOm9wqY1RgjpL3YTkF39tni1XajUIkawTLUo9EZEVUFga5gSQJF8nNS7ZwJQ02y+1YCNYcMh+HIf1ZqE+w==}
    engines: {node: '>= 0.4'}

  is-weakref@1.1.1:
    resolution: {integrity: sha512-6i9mGWSlqzNMEqpCp93KwRS1uUOodk2OJ6b+sq7ZPDSy2WuI5NFIxp/254TytR8ftefexkWn5xNiHUNpPOfSew==}
    engines: {node: '>= 0.4'}

  is-weakset@2.0.4:
    resolution: {integrity: sha512-mfcwb6IzQyOKTs84CQMrOwW4gQcaTOAWJ0zzJCl2WSPDrWk/OzDaImWFH3djXhb24g4eudZfLRozAvPGw4d9hQ==}
    engines: {node: '>= 0.4'}

  isarray@1.0.0:
    resolution: {integrity: sha512-VLghIWNM6ELQzo7zwmcg0NmTVyWKYjvIeM83yjp0wRDTmUnrM678fQbcKBo6n2CJEF0szoG//ytg+TKla89ALQ==}

  isarray@2.0.5:
    resolution: {integrity: sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==}

  isexe@2.0.0:
    resolution: {integrity: sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==}

  isstream@0.1.2:
    resolution: {integrity: sha512-Yljz7ffyPbrLpLngrMtZ7NduUgVvi6wG9RJ9IUcyCd59YQ911PBJphODUcbOVbqYfxe1wuYf/LJ8PauMRwsM/g==}

  istanbul-lib-coverage@3.2.2:
    resolution: {integrity: sha512-O8dpsF+r0WV/8MNRKfnmrtCWhuKjxrq2w+jpzBL5UZKTi2LeVWnWOmWRxFlesJONmc+wLAGvKQZEOanko0LFTg==}
    engines: {node: '>=8'}

  istanbul-lib-instrument@5.2.1:
    resolution: {integrity: sha512-pzqtp31nLv/XFOzXGuvhCb8qhjmTVo5vjVk19XE4CRlSWz0KoeJ3bw9XsA7nOp9YBf4qHjwBxkDzKcME/J29Yg==}
    engines: {node: '>=8'}

  istanbul-lib-instrument@6.0.3:
    resolution: {integrity: sha512-Vtgk7L/R2JHyyGW07spoFlB8/lpjiOLTjMdms6AFMraYt3BaJauod/NGrfnVG/y4Ix1JEuMRPDPEj2ua+zz1/Q==}
    engines: {node: '>=10'}

  istanbul-lib-report@3.0.1:
    resolution: {integrity: sha512-GCfE1mtsHGOELCU8e/Z7YWzpmybrx/+dSTfLrvY8qRmaY6zXTKWn6WQIjaAFw069icm6GVMNkgu0NzI4iPZUNw==}
    engines: {node: '>=10'}

  istanbul-lib-source-maps@4.0.1:
    resolution: {integrity: sha512-n3s8EwkdFIJCG3BPKBYvskgXGoy88ARzvegkitk60NxRdwltLOTaH7CUiMRXvwYorl0Q712iEjcWB+fK/MrWVw==}
    engines: {node: '>=10'}

  istanbul-reports@3.1.7:
    resolution: {integrity: sha512-BewmUXImeuRk2YY0PVbxgKAysvhRPUQE0h5QRM++nVWyubKGV0l8qQ5op8+B2DOmwSe63Jivj0BjkPQVf8fP5g==}
    engines: {node: '>=8'}

  jackspeak@3.4.3:
    resolution: {integrity: sha512-OGlZQpz2yfahA/Rd1Y8Cd9SIEsqvXkLVoSw/cgwhnhFMDbsQFeZYoJJ7bIZBS9BcamUW96asq/npPWugM+RQBw==}

  jest-changed-files@29.7.0:
    resolution: {integrity: sha512-fEArFiwf1BpQ+4bXSprcDc3/x4HSzL4al2tozwVpDFpsxALjLYdyiIK4e5Vz66GQJIbXJ82+35PtysofptNX2w==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-circus@29.7.0:
    resolution: {integrity: sha512-3E1nCMgipcTkCocFwM90XXQab9bS+GMsjdpmPrlelaxwD93Ad8iVEjX/vvHPdLPnFf+L40u+5+iutRdA1N9myw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-cli@29.7.0:
    resolution: {integrity: sha512-OVVobw2IubN/GSYsxETi+gOe7Ka59EFMR/twOU3Jb2GnKKeMGJB5SGUUrEz3SFVmJASUdZUzy83sLNNQ2gZslg==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    hasBin: true
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true

  jest-config@29.7.0:
    resolution: {integrity: sha512-uXbpfeQ7R6TZBqI3/TxCU4q4ttk3u0PJeC+E0zbfSoSjq6bJ7buBPxzQPL0ifrkY4DNu4JUdk0ImlBUYi840eQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    peerDependencies:
      '@types/node': '*'
      ts-node: '>=9.0.0'
    peerDependenciesMeta:
      '@types/node':
        optional: true
      ts-node:
        optional: true

  jest-diff@29.7.0:
    resolution: {integrity: sha512-LMIgiIrhigmPrs03JHpxUh2yISK3vLFPkAodPeo0+BuF7wA2FoQbkEg1u8gBYBThncu7e1oEDUfIXVuTqLRUjw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-docblock@29.7.0:
    resolution: {integrity: sha512-q617Auw3A612guyaFgsbFeYpNP5t2aoUNLwBUbc/0kD1R4t9ixDbyFTHd1nok4epoVFpr7PmeWHrhvuV3XaJ4g==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-each@29.7.0:
    resolution: {integrity: sha512-gns+Er14+ZrEoC5fhOfYCY1LOHHr0TI+rQUHZS8Ttw2l7gl+80eHc/gFf2Ktkw0+SIACDTeWvpFcv3B04VembQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-environment-node@29.7.0:
    resolution: {integrity: sha512-DOSwCRqXirTOyheM+4d5YZOrWcdu0LNZ87ewUoywbcb2XR4wKgqiG8vNeYwhjFMbEkfju7wx2GYH0P2gevGvFw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-get-type@29.6.3:
    resolution: {integrity: sha512-zrteXnqYxfQh7l5FHyL38jL39di8H8rHoecLH3JNxH3BwOrBsNeabdap5e0I23lD4HHI8W5VFBZqG4Eaq5LNcw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-haste-map@29.7.0:
    resolution: {integrity: sha512-fP8u2pyfqx0K1rGn1R9pyE0/KTn+G7PxktWidOBTqFPLYX0b9ksaMFkhK5vrS3DVun09pckLdlx90QthlW7AmA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-leak-detector@29.7.0:
    resolution: {integrity: sha512-kYA8IJcSYtST2BY9I+SMC32nDpBT3J2NvWJx8+JCuCdl/CR1I4EKUJROiP8XtCcxqgTTBGJNdbB1A8XRKbTetw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-matcher-utils@29.7.0:
    resolution: {integrity: sha512-sBkD+Xi9DtcChsI3L3u0+N0opgPYnCRPtGcQYrgXmR+hmt/fYfWAL0xRXYU8eWOdfuLgBe0YCW3AFtnRLagq/g==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-message-util@29.7.0:
    resolution: {integrity: sha512-GBEV4GRADeP+qtB2+6u61stea8mGcOT4mCtrYISZwfu9/ISHFJ/5zOMXYbpBE9RsS5+Gb63DW4FgmnKJ79Kf6w==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-mock@29.7.0:
    resolution: {integrity: sha512-ITOMZn+UkYS4ZFh83xYAOzWStloNzJFO2s8DWrE4lhtGD+AorgnbkiKERe4wQVBydIGPx059g6riW5Btp6Llnw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-pnp-resolver@1.2.3:
    resolution: {integrity: sha512-+3NpwQEnRoIBtx4fyhblQDPgJI0H1IEIkX7ShLUjPGA7TtUTvI1oiKi3SR4oBR0hQhQR80l4WAe5RrXBwWMA8w==}
    engines: {node: '>=6'}
    peerDependencies:
      jest-resolve: '*'
    peerDependenciesMeta:
      jest-resolve:
        optional: true

  jest-regex-util@29.6.3:
    resolution: {integrity: sha512-KJJBsRCyyLNWCNBOvZyRDnAIfUiRJ8v+hOBQYGn8gDyF3UegwiP4gwRR3/SDa42g1YbVycTidUF3rKjyLFDWbg==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-resolve-dependencies@29.7.0:
    resolution: {integrity: sha512-un0zD/6qxJ+S0et7WxeI3H5XSe9lTBBR7bOHCHXkKR6luG5mwDDlIzVQ0V5cZCuoTgEdcdwzTghYkTWfubi+nA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-resolve@29.7.0:
    resolution: {integrity: sha512-IOVhZSrg+UvVAshDSDtHyFCCBUl/Q3AAJv8iZ6ZjnZ74xzvwuzLXid9IIIPgTnY62SJjfuupMKZsZQRsCvxEgA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-runner@29.7.0:
    resolution: {integrity: sha512-fsc4N6cPCAahybGBfTRcq5wFR6fpLznMg47sY5aDpsoejOcVYFb07AHuSnR0liMcPTgBsA3ZJL6kFOjPdoNipQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-runtime@29.7.0:
    resolution: {integrity: sha512-gUnLjgwdGqW7B4LvOIkbKs9WGbn+QLqRQQ9juC6HndeDiezIwhDP+mhMwHWCEcfQ5RUXa6OPnFF8BJh5xegwwQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-snapshot@29.7.0:
    resolution: {integrity: sha512-Rm0BMWtxBcioHr1/OX5YCP8Uov4riHvKPknOGs804Zg9JGZgmIBkbtlxJC/7Z4msKYVbIJtfU+tKb8xlYNfdkw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-util@29.7.0:
    resolution: {integrity: sha512-z6EbKajIpqGKU56y5KBUgy1dt1ihhQJgWzUlZHArA/+X2ad7Cb5iF+AK1EWVL/Bo7Rz9uurpqw6SiBCefUbCGA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-validate@29.7.0:
    resolution: {integrity: sha512-ZB7wHqaRGVw/9hST/OuFUReG7M8vKeq0/J2egIGLdvjHCmYqGARhzXmtgi+gVeZ5uXFF219aOc3Ls2yLg27tkw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-watcher@29.7.0:
    resolution: {integrity: sha512-49Fg7WXkU3Vl2h6LbLtMQ/HyB6rXSIX7SqvBLQmssRBGN9I0PNvPmAmCWSOY6SOvrjhI/F7/bGAv9RtnsPA03g==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-worker@29.7.0:
    resolution: {integrity: sha512-eIz2msL/EzL9UFTFFx7jBTkeZfku0yUAyZZZmJ93H2TYEiroIx2PQjEXcwYtYl8zXCxb+PAmA2hLIt/6ZEkPHw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest@29.7.0:
    resolution: {integrity: sha512-NIy3oAFp9shda19hy4HK0HRTWKtPJmGdnvywu01nOqNC2vZg+Z+fvJDxpMQA88eb2I9EcafcdjYgsDthnYTvGw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    hasBin: true
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true

  jiti@1.21.7:
    resolution: {integrity: sha512-/imKNG4EbWNrVjoNC/1H5/9GFy+tqjGBHCaSsN+P2RnPqjsLmv6UD3Ej+Kj8nBWaRAwyk7kK5ZUc+OEatnTR3A==}
    hasBin: true

  js-cookie@3.0.1:
    resolution: {integrity: sha512-+0rgsUXZu4ncpPxRL+lNEptWMOWl9etvPHc/koSRp6MPwpRYAhmk0dUG00J4bxVV3r9uUzfo24wW0knS07SKSw==}
    engines: {node: '>=12'}

  js-tokens@4.0.0:
    resolution: {integrity: sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==}

  js-yaml@3.14.1:
    resolution: {integrity: sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==}
    hasBin: true

  js-yaml@4.1.0:
    resolution: {integrity: sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==}
    hasBin: true

  jsbn@0.1.1:
    resolution: {integrity: sha512-UVU9dibq2JcFWxQPA6KCqj5O42VOmAY3zQUfEKxU0KpTGXwNoCjkX1e13eHNvw/xPynt6pU0rZ1htjWTNTSXsg==}

  jsesc@3.1.0:
    resolution: {integrity: sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==}
    engines: {node: '>=6'}
    hasBin: true

  json-buffer@3.0.1:
    resolution: {integrity: sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==}

  json-parse-even-better-errors@2.3.1:
    resolution: {integrity: sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==}

  json-schema-traverse@0.4.1:
    resolution: {integrity: sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==}

  json-schema@0.4.0:
    resolution: {integrity: sha512-es94M3nTIfsEPisRafak+HDLfHXnKBhV3vU5eqPcS3flIWqcxJWgXHXiey3YrpaNsanY5ei1VoYEbOzijuq9BA==}

  json-stable-stringify-without-jsonify@1.0.1:
    resolution: {integrity: sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==}

  json-stringify-safe@5.0.1:
    resolution: {integrity: sha512-ZClg6AaYvamvYEE82d3Iyd3vSSIjQ+odgjaTzRuO3s7toCdFKczob2i0zCh7JE8kWn17yvAWhUVxvqGwUalsRA==}

  json5@2.2.3:
    resolution: {integrity: sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==}
    engines: {node: '>=6'}
    hasBin: true

  jsprim@1.4.2:
    resolution: {integrity: sha512-P2bSOMAc/ciLz6DzgjVlGJP9+BrJWu5UDGK70C2iweC5QBIeFf0ZXRvGjEj2uYgrY2MkAAhsSWHDWlFtEroZWw==}
    engines: {node: '>=0.6.0'}

  jsprim@2.0.2:
    resolution: {integrity: sha512-gqXddjPqQ6G40VdnI6T6yObEC+pDNvyP95wdQhkWkg7crHH3km5qP1FsOXEkzEQwnz6gz5qGTn1c2Y52wP3OyQ==}
    engines: {'0': node >=0.6.0}

  keyv@4.5.4:
    resolution: {integrity: sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==}

  kleur@3.0.3:
    resolution: {integrity: sha512-eTIzlVOSUR+JxdDFepEYcBMtZ9Qqdef+rnzWdRZuMbOywu5tO2w2N7rqjoANZ5k9vywhL6Br1VRjUIgTQx4E8w==}
    engines: {node: '>=6'}

  leven@3.1.0:
    resolution: {integrity: sha512-qsda+H8jTaUaN/x5vzW2rzc+8Rw4TAQ/4KjB46IwK5VH+IlVeeeje/EoZRpiXvIqjFgK84QffqPztGI3VBLG1A==}
    engines: {node: '>=6'}

  levn@0.4.1:
    resolution: {integrity: sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==}
    engines: {node: '>= 0.8.0'}

  lilconfig@3.1.3:
    resolution: {integrity: sha512-/vlFKAoH5Cgt3Ie+JLhRbwOsCQePABiU3tJ1egGvyQ+33R/vcwM2Zl2QR/LzjsBeItPt3oSVXapn+m4nQDvpzw==}
    engines: {node: '>=14'}

  lines-and-columns@1.2.4:
    resolution: {integrity: sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==}

  locate-path@5.0.0:
    resolution: {integrity: sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==}
    engines: {node: '>=8'}

  locate-path@6.0.0:
    resolution: {integrity: sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==}
    engines: {node: '>=10'}

  lodash.castarray@4.4.0:
    resolution: {integrity: sha512-aVx8ztPv7/2ULbArGJ2Y42bG1mEQ5mGjpdvrbJcJFU3TbYybe+QlLS4pst9zV52ymy2in1KpFPiZnAOATxD4+Q==}

  lodash.isplainobject@4.0.6:
    resolution: {integrity: sha512-oSXzaWypCMHkPC3NvBEaPHf0KsA5mvPrOPgQWDsbg8n7orZ290M0BmC/jgRZ4vcJ6DTAhjrsSYgdsW/F+MFOBA==}

  lodash.merge@4.6.2:
    resolution: {integrity: sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==}

  lodash@4.17.21:
    resolution: {integrity: sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==}

  long-timeout@0.1.1:
    resolution: {integrity: sha512-BFRuQUqc7x2NWxfJBCyUrN8iYUYznzL9JROmRz1gZ6KlOIgmoD+njPVbb+VNn2nGMKggMsK79iUNErillsrx7w==}

  longest-streak@3.1.0:
    resolution: {integrity: sha512-9Ri+o0JYgehTaVBBDoMqIl8GXtbWg711O3srftcHhZ0dqnETqLaoIK0x17fUw9rFSlK/0NlsKe0Ahhyl5pXE2g==}

  loose-envify@1.4.0:
    resolution: {integrity: sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==}
    hasBin: true

  lowlight@1.20.0:
    resolution: {integrity: sha512-8Ktj+prEb1RoCPkEOrPMYUN/nCggB7qAWe3a7OpMjWQkh3l2RD5wKRQ+o8Q8YuI9RG/xs95waaI/E6ym/7NsTw==}

  lru-cache@10.4.3:
    resolution: {integrity: sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==}

  lru-cache@5.1.1:
    resolution: {integrity: sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==}

  lucide-react@0.344.0:
    resolution: {integrity: sha512-6YyBnn91GB45VuVT96bYCOKElbJzUHqp65vX8cDcu55MQL9T969v4dhGClpljamuI/+KMO9P6w9Acq1CVQGvIQ==}
    peerDependencies:
      react: ^16.5.1 || ^17.0.0 || ^18.0.0

  luxon@3.5.0:
    resolution: {integrity: sha512-rh+Zjr6DNfUYR3bPwJEnuwDdqMbxZW7LOQfUN4B54+Cl+0o5zaU9RJ6bcidfDtC1cWCZXQ+nvX8bf6bAji37QQ==}
    engines: {node: '>=12'}

  make-dir@4.0.0:
    resolution: {integrity: sha512-hXdUTZYIVOt1Ex//jAQi+wTZZpUpwBj/0QsOzqegb3rGMMeJiSEu5xLHnYfBrRV4RH2+OCSOO95Is/7x1WJ4bw==}
    engines: {node: '>=10'}

  makeerror@1.0.12:
    resolution: {integrity: sha512-JmqCvUhmt43madlpFzG4BQzG2Z3m6tvQDNKdClZnO3VbIudJYmxsT0FNJMeiB2+JTSlTQTSbU8QdesVmwJcmLg==}

  markdown-table@3.0.4:
    resolution: {integrity: sha512-wiYz4+JrLyb/DqW2hkFJxP7Vd7JuTDm77fvbM8VfEQdmSMqcImWeeRbHwZjBjIFki/VaMK2BhFi7oUUZeM5bqw==}

  math-intrinsics@1.1.0:
    resolution: {integrity: sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==}
    engines: {node: '>= 0.4'}

  mdast-util-find-and-replace@3.0.2:
    resolution: {integrity: sha512-Tmd1Vg/m3Xz43afeNxDIhWRtFZgM2VLyaf4vSTYwudTyeuTneoL3qtWMA5jeLyz/O1vDJmmV4QuScFCA2tBPwg==}

  mdast-util-from-markdown@2.0.2:
    resolution: {integrity: sha512-uZhTV/8NBuw0WHkPTrCqDOl0zVe1BIng5ZtHoDk49ME1qqcjYmmLmOf0gELgcRMxN4w2iuIeVso5/6QymSrgmA==}

  mdast-util-gfm-autolink-literal@2.0.1:
    resolution: {integrity: sha512-5HVP2MKaP6L+G6YaxPNjuL0BPrq9orG3TsrZ9YXbA3vDw/ACI4MEsnoDpn6ZNm7GnZgtAcONJyPhOP8tNJQavQ==}

  mdast-util-gfm-footnote@2.1.0:
    resolution: {integrity: sha512-sqpDWlsHn7Ac9GNZQMeUzPQSMzR6Wv0WKRNvQRg0KqHh02fpTz69Qc1QSseNX29bhz1ROIyNyxExfawVKTm1GQ==}

  mdast-util-gfm-strikethrough@2.0.0:
    resolution: {integrity: sha512-mKKb915TF+OC5ptj5bJ7WFRPdYtuHv0yTRxK2tJvi+BDqbkiG7h7u/9SI89nRAYcmap2xHQL9D+QG/6wSrTtXg==}

  mdast-util-gfm-table@2.0.0:
    resolution: {integrity: sha512-78UEvebzz/rJIxLvE7ZtDd/vIQ0RHv+3Mh5DR96p7cS7HsBhYIICDBCu8csTNWNO6tBWfqXPWekRuj2FNOGOZg==}

  mdast-util-gfm-task-list-item@2.0.0:
    resolution: {integrity: sha512-IrtvNvjxC1o06taBAVJznEnkiHxLFTzgonUdy8hzFVeDun0uTjxxrRGVaNFqkU1wJR3RBPEfsxmU6jDWPofrTQ==}

  mdast-util-gfm@3.1.0:
    resolution: {integrity: sha512-0ulfdQOM3ysHhCJ1p06l0b0VKlhU0wuQs3thxZQagjcjPrlFRqY215uZGHHJan9GEAXd9MbfPjFJz+qMkVR6zQ==}

  mdast-util-mdx-expression@2.0.1:
    resolution: {integrity: sha512-J6f+9hUp+ldTZqKRSg7Vw5V6MqjATc+3E4gf3CFNcuZNWD8XdyI6zQ8GqH7f8169MM6P7hMBRDVGnn7oHB9kXQ==}

  mdast-util-mdx-jsx@3.2.0:
    resolution: {integrity: sha512-lj/z8v0r6ZtsN/cGNNtemmmfoLAFZnjMbNyLzBafjzikOM+glrjNHPlf6lQDOTccj9n5b0PPihEBbhneMyGs1Q==}

  mdast-util-mdxjs-esm@2.0.1:
    resolution: {integrity: sha512-EcmOpxsZ96CvlP03NghtH1EsLtr0n9Tm4lPUJUBccV9RwUOneqSycg19n5HGzCf+10LozMRSObtVr3ee1WoHtg==}

  mdast-util-phrasing@4.1.0:
    resolution: {integrity: sha512-TqICwyvJJpBwvGAMZjj4J2n0X8QWp21b9l0o7eXyVJ25YNWYbJDVIyD1bZXE6WtV6RmKJVYmQAKWa0zWOABz2w==}

  mdast-util-to-hast@13.2.0:
    resolution: {integrity: sha512-QGYKEuUsYT9ykKBCMOEDLsU5JRObWQusAolFMeko/tYPufNkRffBAQjIE+99jbA87xv6FgmjLtwjh9wBWajwAA==}

  mdast-util-to-markdown@2.1.2:
    resolution: {integrity: sha512-xj68wMTvGXVOKonmog6LwyJKrYXZPvlwabaryTjLh9LuvovB/KAH+kvi8Gjj+7rJjsFi23nkUxRQv1KqSroMqA==}

  mdast-util-to-string@4.0.0:
    resolution: {integrity: sha512-0H44vDimn51F0YwvxSJSm0eCDOJTRlmN0R1yBh4HLj9wiV1Dn0QoXGbvFAWj2hSItVTlCmBF1hqKlIyUBVFLPg==}

  merge-stream@2.0.0:
    resolution: {integrity: sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==}

  merge2@1.4.1:
    resolution: {integrity: sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==}
    engines: {node: '>= 8'}

  micromark-core-commonmark@2.0.3:
    resolution: {integrity: sha512-RDBrHEMSxVFLg6xvnXmb1Ayr2WzLAWjeSATAoxwKYJV94TeNavgoIdA0a9ytzDSVzBy2YKFK+emCPOEibLeCrg==}

  micromark-extension-gfm-autolink-literal@2.1.0:
    resolution: {integrity: sha512-oOg7knzhicgQ3t4QCjCWgTmfNhvQbDDnJeVu9v81r7NltNCVmhPy1fJRX27pISafdjL+SVc4d3l48Gb6pbRypw==}

  micromark-extension-gfm-footnote@2.1.0:
    resolution: {integrity: sha512-/yPhxI1ntnDNsiHtzLKYnE3vf9JZ6cAisqVDauhp4CEHxlb4uoOTxOCJ+9s51bIB8U1N1FJ1RXOKTIlD5B/gqw==}

  micromark-extension-gfm-strikethrough@2.1.0:
    resolution: {integrity: sha512-ADVjpOOkjz1hhkZLlBiYA9cR2Anf8F4HqZUO6e5eDcPQd0Txw5fxLzzxnEkSkfnD0wziSGiv7sYhk/ktvbf1uw==}

  micromark-extension-gfm-table@2.1.1:
    resolution: {integrity: sha512-t2OU/dXXioARrC6yWfJ4hqB7rct14e8f7m0cbI5hUmDyyIlwv5vEtooptH8INkbLzOatzKuVbQmAYcbWoyz6Dg==}

  micromark-extension-gfm-tagfilter@2.0.0:
    resolution: {integrity: sha512-xHlTOmuCSotIA8TW1mDIM6X2O1SiX5P9IuDtqGonFhEK0qgRI4yeC6vMxEV2dgyr2TiD+2PQ10o+cOhdVAcwfg==}

  micromark-extension-gfm-task-list-item@2.1.0:
    resolution: {integrity: sha512-qIBZhqxqI6fjLDYFTBIa4eivDMnP+OZqsNwmQ3xNLE4Cxwc+zfQEfbs6tzAo2Hjq+bh6q5F+Z8/cksrLFYWQQw==}

  micromark-extension-gfm@3.0.0:
    resolution: {integrity: sha512-vsKArQsicm7t0z2GugkCKtZehqUm31oeGBV/KVSorWSy8ZlNAv7ytjFhvaryUiCUJYqs+NoE6AFhpQvBTM6Q4w==}

  micromark-factory-destination@2.0.1:
    resolution: {integrity: sha512-Xe6rDdJlkmbFRExpTOmRj9N3MaWmbAgdpSrBQvCFqhezUn4AHqJHbaEnfbVYYiexVSs//tqOdY/DxhjdCiJnIA==}

  micromark-factory-label@2.0.1:
    resolution: {integrity: sha512-VFMekyQExqIW7xIChcXn4ok29YE3rnuyveW3wZQWWqF4Nv9Wk5rgJ99KzPvHjkmPXF93FXIbBp6YdW3t71/7Vg==}

  micromark-factory-space@2.0.1:
    resolution: {integrity: sha512-zRkxjtBxxLd2Sc0d+fbnEunsTj46SWXgXciZmHq0kDYGnck/ZSGj9/wULTV95uoeYiK5hRXP2mJ98Uo4cq/LQg==}

  micromark-factory-title@2.0.1:
    resolution: {integrity: sha512-5bZ+3CjhAd9eChYTHsjy6TGxpOFSKgKKJPJxr293jTbfry2KDoWkhBb6TcPVB4NmzaPhMs1Frm9AZH7OD4Cjzw==}

  micromark-factory-whitespace@2.0.1:
    resolution: {integrity: sha512-Ob0nuZ3PKt/n0hORHyvoD9uZhr+Za8sFoP+OnMcnWK5lngSzALgQYKMr9RJVOWLqQYuyn6ulqGWSXdwf6F80lQ==}

  micromark-util-character@2.1.1:
    resolution: {integrity: sha512-wv8tdUTJ3thSFFFJKtpYKOYiGP2+v96Hvk4Tu8KpCAsTMs6yi+nVmGh1syvSCsaxz45J6Jbw+9DD6g97+NV67Q==}

  micromark-util-chunked@2.0.1:
    resolution: {integrity: sha512-QUNFEOPELfmvv+4xiNg2sRYeS/P84pTW0TCgP5zc9FpXetHY0ab7SxKyAQCNCc1eK0459uoLI1y5oO5Vc1dbhA==}

  micromark-util-classify-character@2.0.1:
    resolution: {integrity: sha512-K0kHzM6afW/MbeWYWLjoHQv1sgg2Q9EccHEDzSkxiP/EaagNzCm7T/WMKZ3rjMbvIpvBiZgwR3dKMygtA4mG1Q==}

  micromark-util-combine-extensions@2.0.1:
    resolution: {integrity: sha512-OnAnH8Ujmy59JcyZw8JSbK9cGpdVY44NKgSM7E9Eh7DiLS2E9RNQf0dONaGDzEG9yjEl5hcqeIsj4hfRkLH/Bg==}

  micromark-util-decode-numeric-character-reference@2.0.2:
    resolution: {integrity: sha512-ccUbYk6CwVdkmCQMyr64dXz42EfHGkPQlBj5p7YVGzq8I7CtjXZJrubAYezf7Rp+bjPseiROqe7G6foFd+lEuw==}

  micromark-util-decode-string@2.0.1:
    resolution: {integrity: sha512-nDV/77Fj6eH1ynwscYTOsbK7rR//Uj0bZXBwJZRfaLEJ1iGBR6kIfNmlNqaqJf649EP0F3NWNdeJi03elllNUQ==}

  micromark-util-encode@2.0.1:
    resolution: {integrity: sha512-c3cVx2y4KqUnwopcO9b/SCdo2O67LwJJ/UyqGfbigahfegL9myoEFoDYZgkT7f36T0bLrM9hZTAaAyH+PCAXjw==}

  micromark-util-html-tag-name@2.0.1:
    resolution: {integrity: sha512-2cNEiYDhCWKI+Gs9T0Tiysk136SnR13hhO8yW6BGNyhOC4qYFnwF1nKfD3HFAIXA5c45RrIG1ub11GiXeYd1xA==}

  micromark-util-normalize-identifier@2.0.1:
    resolution: {integrity: sha512-sxPqmo70LyARJs0w2UclACPUUEqltCkJ6PhKdMIDuJ3gSf/Q+/GIe3WKl0Ijb/GyH9lOpUkRAO2wp0GVkLvS9Q==}

  micromark-util-resolve-all@2.0.1:
    resolution: {integrity: sha512-VdQyxFWFT2/FGJgwQnJYbe1jjQoNTS4RjglmSjTUlpUMa95Htx9NHeYW4rGDJzbjvCsl9eLjMQwGeElsqmzcHg==}

  micromark-util-sanitize-uri@2.0.1:
    resolution: {integrity: sha512-9N9IomZ/YuGGZZmQec1MbgxtlgougxTodVwDzzEouPKo3qFWvymFHWcnDi2vzV1ff6kas9ucW+o3yzJK9YB1AQ==}

  micromark-util-subtokenize@2.1.0:
    resolution: {integrity: sha512-XQLu552iSctvnEcgXw6+Sx75GflAPNED1qx7eBJ+wydBb2KCbRZe+NwvIEEMM83uml1+2WSXpBAcp9IUCgCYWA==}

  micromark-util-symbol@2.0.1:
    resolution: {integrity: sha512-vs5t8Apaud9N28kgCrRUdEed4UJ+wWNvicHLPxCa9ENlYuAY31M0ETy5y1vA33YoNPDFTghEbnh6efaE8h4x0Q==}

  micromark-util-types@2.0.2:
    resolution: {integrity: sha512-Yw0ECSpJoViF1qTU4DC6NwtC4aWGt1EkzaQB8KPPyCRR8z9TWeV0HbEFGTO+ZY1wB22zmxnJqhPyTpOVCpeHTA==}

  micromark@4.0.2:
    resolution: {integrity: sha512-zpe98Q6kvavpCr1NPVSCMebCKfD7CA2NqZ+rykeNhONIJBpc1tFKt9hucLGwha3jNTNI8lHpctWJWoimVF4PfA==}

  micromatch@4.0.8:
    resolution: {integrity: sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==}
    engines: {node: '>=8.6'}

  mime-db@1.52.0:
    resolution: {integrity: sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==}
    engines: {node: '>= 0.6'}

  mime-types@2.1.35:
    resolution: {integrity: sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==}
    engines: {node: '>= 0.6'}

  mime@1.6.0:
    resolution: {integrity: sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==}
    engines: {node: '>=4'}
    hasBin: true

  mimic-fn@2.1.0:
    resolution: {integrity: sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==}
    engines: {node: '>=6'}

  mini-svg-data-uri@1.4.4:
    resolution: {integrity: sha512-r9deDe9p5FJUPZAk3A59wGH7Ii9YrjjWw0jmw/liSbHl2CHiyXj6FcDXDu2K3TjVAXqiJdaw3xxwlZZr9E6nHg==}
    hasBin: true

  minimatch@3.1.2:
    resolution: {integrity: sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==}

  minimatch@9.0.5:
    resolution: {integrity: sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==}
    engines: {node: '>=16 || 14 >=14.17'}

  minipass@7.1.2:
    resolution: {integrity: sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==}
    engines: {node: '>=16 || 14 >=14.17'}

  monaco-editor@0.52.2:
    resolution: {integrity: sha512-GEQWEZmfkOGLdd3XK8ryrfWz3AIP8YymVXiPHEdewrUq7mh0qrKrfHLNCXcbB6sTnMLnOZ3ztSiKcciFUkIJwQ==}

  motion-dom@11.18.1:
    resolution: {integrity: sha512-g76KvA001z+atjfxczdRtw/RXOM3OMSdd1f4DL77qCTF/+avrRJiawSG4yDibEQ215sr9kpinSlX2pCTJ9zbhw==}

  motion-utils@11.18.1:
    resolution: {integrity: sha512-49Kt+HKjtbJKLtgO/LKj9Ld+6vw9BjH5d9sc40R/kVyH8GLAXgT42M2NnuPcJNuA3s9ZfZBUcwIgpmZWGEE+hA==}

  ms@2.1.3:
    resolution: {integrity: sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==}

  mz@2.7.0:
    resolution: {integrity: sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==}

  nanoid@3.3.8:
    resolution: {integrity: sha512-WNLf5Sd8oZxOm+TzppcYk8gVOgP+l58xNy58D0nbUnOxOWRWvlcCV4kUF7ltmI6PsrLl/BgKEyS4mqsGChFN0w==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true

  natural-compare@1.4.0:
    resolution: {integrity: sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==}

  next@15.2.3:
    resolution: {integrity: sha512-x6eDkZxk2rPpu46E1ZVUWIBhYCLszmUY6fvHBFcbzJ9dD+qRX6vcHusaqqDlnY+VngKzKbAiG2iRCkPbmi8f7w==}
    engines: {node: ^18.18.0 || ^19.8.0 || >= 20.0.0}
    hasBin: true
    peerDependencies:
      '@opentelemetry/api': ^1.1.0
      '@playwright/test': ^1.41.2
      babel-plugin-react-compiler: '*'
      react: ^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0
      react-dom: ^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0
      sass: ^1.3.0
    peerDependenciesMeta:
      '@opentelemetry/api':
        optional: true
      '@playwright/test':
        optional: true
      babel-plugin-react-compiler:
        optional: true
      sass:
        optional: true

  node-fetch@2.7.0:
    resolution: {integrity: sha512-c4FRfUm/dbcWZ7U+1Wq0AwCyFL+3nt2bEw05wfxSz+DWpWsitgmSgYmy2dQdWyKC1694ELPqMs/YzUSNozLt8A==}
    engines: {node: 4.x || >=6.0.0}
    peerDependencies:
      encoding: ^0.1.0
    peerDependenciesMeta:
      encoding:
        optional: true

  node-gyp-build@4.8.4:
    resolution: {integrity: sha512-LA4ZjwlnUblHVgq0oBF3Jl/6h/Nvs5fzBLwdEF4nuxnFdsfajde4WfxtJr3CaiH+F6ewcIB/q4jQ4UzPyid+CQ==}
    hasBin: true

  node-int64@0.4.0:
    resolution: {integrity: sha512-O5lz91xSOeoXP6DulyHfllpq+Eg00MWitZIbtPfoSEvqIHdl5gfcY6hYzDWnj0qD5tz52PI08u9qUvSVeUBeHw==}

  node-releases@2.0.19:
    resolution: {integrity: sha512-xxOWJsBKtzAq7DY0J+DTzuz58K8e7sJbdgwkbMWQe8UYB6ekmsQ45q0M/tJDsGaZmbC+l7n57UV8Hl5tHxO9uw==}

  node-schedule@2.1.1:
    resolution: {integrity: sha512-OXdegQq03OmXEjt2hZP33W2YPs/E5BcFQks46+G2gAxs4gHOIVD1u7EqlYLYSKsaIpyKCK9Gbk0ta1/gjRSMRQ==}
    engines: {node: '>=6'}

  node-telegram-bot-api@0.66.0:
    resolution: {integrity: sha512-s4Hrg5q+VPl4/tJVG++pImxF6eb8tNJNj4KnDqAOKL6zGU34lo9RXmyAN158njwGN+v8hdNf8s9fWIYW9hPb5A==}
    engines: {node: '>=0.12'}

  normalize-path@3.0.0:
    resolution: {integrity: sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==}
    engines: {node: '>=0.10.0'}

  normalize-range@0.1.2:
    resolution: {integrity: sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==}
    engines: {node: '>=0.10.0'}

  npm-run-path@4.0.1:
    resolution: {integrity: sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==}
    engines: {node: '>=8'}

  nth-check@2.1.1:
    resolution: {integrity: sha512-lqjrjmaOoAnWfMmBPL+XNnynZh2+swxiX3WUE0s4yEHI6m+AwrK2UZOimIRl3X/4QctVqS8AiZjFqyOGrMXb/w==}

  oauth-sign@0.9.0:
    resolution: {integrity: sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ==}

  object-assign@4.1.1:
    resolution: {integrity: sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==}
    engines: {node: '>=0.10.0'}

  object-hash@3.0.0:
    resolution: {integrity: sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==}
    engines: {node: '>= 6'}

  object-inspect@1.13.4:
    resolution: {integrity: sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==}
    engines: {node: '>= 0.4'}

  object-keys@1.1.1:
    resolution: {integrity: sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==}
    engines: {node: '>= 0.4'}

  object.assign@4.1.7:
    resolution: {integrity: sha512-nK28WOo+QIjBkDduTINE4JkF/UJJKyf2EJxvJKfblDpyg0Q+pkOHNTL0Qwy6NP6FhE/EnzV73BxxqcJaXY9anw==}
    engines: {node: '>= 0.4'}

  once@1.4.0:
    resolution: {integrity: sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==}

  onetime@5.1.2:
    resolution: {integrity: sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==}
    engines: {node: '>=6'}

  optionator@0.9.4:
    resolution: {integrity: sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==}
    engines: {node: '>= 0.8.0'}

  own-keys@1.0.1:
    resolution: {integrity: sha512-qFOyK5PjiWZd+QQIh+1jhdb9LpxTF0qs7Pm8o5QHYZ0M3vKqSqzsZaEB6oWlxZ+q2sJBMI/Ktgd2N5ZwQoRHfg==}
    engines: {node: '>= 0.4'}

  p-limit@2.3.0:
    resolution: {integrity: sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==}
    engines: {node: '>=6'}

  p-limit@3.1.0:
    resolution: {integrity: sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==}
    engines: {node: '>=10'}

  p-locate@4.1.0:
    resolution: {integrity: sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==}
    engines: {node: '>=8'}

  p-locate@5.0.0:
    resolution: {integrity: sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==}
    engines: {node: '>=10'}

  p-try@2.2.0:
    resolution: {integrity: sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==}
    engines: {node: '>=6'}

  package-json-from-dist@1.0.1:
    resolution: {integrity: sha512-UEZIS3/by4OC8vL3P2dTXRETpebLI2NiI5vIrjaD/5UtrkFX/tNbwjTSRAGC/+7CAo2pIcBaRgWmcBBHcsaCIw==}

  pako@1.0.11:
    resolution: {integrity: sha512-4hLB8Py4zZce5s4yd9XzopqwVv/yGNhV1Bl8NTmCq1763HeK2+EwVTv+leGeL13Dnh2wfbqowVPXCIO0z4taYw==}

  parent-module@1.0.1:
    resolution: {integrity: sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==}
    engines: {node: '>=6'}

  parse-entities@2.0.0:
    resolution: {integrity: sha512-kkywGpCcRYhqQIchaWqZ875wzpS/bMKhz5HnN3p7wveJTkTtyAB/AlnS0f8DFSqYW1T82t6yEAkEcB+A1I3MbQ==}

  parse-entities@4.0.2:
    resolution: {integrity: sha512-GG2AQYWoLgL877gQIKeRPGO1xF9+eG1ujIb5soS5gPvLQ1y2o8FL90w2QWNdf9I361Mpp7726c+lj3U0qK1uGw==}

  parse-json@5.2.0:
    resolution: {integrity: sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==}
    engines: {node: '>=8'}

  parse-numeric-range@1.3.0:
    resolution: {integrity: sha512-twN+njEipszzlMJd4ONUYgSfZPDxgHhT9Ahed5uTigpQn90FggW4SA/AIPq/6a149fTbE9qBEcSwE3FAEp6wQQ==}

  parse5@7.2.1:
    resolution: {integrity: sha512-BuBYQYlv1ckiPdQi/ohiivi9Sagc9JG+Ozs0r7b/0iK3sKmrb0b9FdWdBbOdx6hBCM/F9Ir82ofnBhtZOjCRPQ==}

  path-exists@4.0.0:
    resolution: {integrity: sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==}
    engines: {node: '>=8'}

  path-is-absolute@1.0.1:
    resolution: {integrity: sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==}
    engines: {node: '>=0.10.0'}

  path-key@3.1.1:
    resolution: {integrity: sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==}
    engines: {node: '>=8'}

  path-parse@1.0.7:
    resolution: {integrity: sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==}

  path-scurry@1.11.1:
    resolution: {integrity: sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==}
    engines: {node: '>=16 || 14 >=14.18'}

  path-type@4.0.0:
    resolution: {integrity: sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==}
    engines: {node: '>=8'}

  pdf-lib@1.17.1:
    resolution: {integrity: sha512-V/mpyJAoTsN4cnP31vc0wfNA1+p20evqqnap0KLoRUN0Yk/p3wN52DOEsL4oBFcLdb76hlpKPtzJIgo67j/XLw==}

  performance-now@2.1.0:
    resolution: {integrity: sha512-7EAHlyLHI56VEIdK57uwHdHKIaAGbnXPiw0yWbarQZOKaKpvUIgW0jWRVLiatnM+XXlSwsanIBH/hzGMJulMow==}

  picocolors@1.1.1:
    resolution: {integrity: sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==}

  picomatch@2.3.1:
    resolution: {integrity: sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==}
    engines: {node: '>=8.6'}

  pify@2.3.0:
    resolution: {integrity: sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==}
    engines: {node: '>=0.10.0'}

  pirates@4.0.6:
    resolution: {integrity: sha512-saLsH7WeYYPiD25LDuLRRY/i+6HaPYr6G1OUlN39otzkSTxKnubR9RTxS3/Kk50s1g2JTgFwWQDQyplC5/SHZg==}
    engines: {node: '>= 6'}

  pkg-dir@4.2.0:
    resolution: {integrity: sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==}
    engines: {node: '>=8'}

  possible-typed-array-names@1.1.0:
    resolution: {integrity: sha512-/+5VFTchJDoVj3bhoqi6UeymcD00DAwb1nJwamzPvHEszJ4FpF6SNNbUbOS8yI56qHzdV8eK0qEfOSiodkTdxg==}
    engines: {node: '>= 0.4'}

  postcss-import@15.1.0:
    resolution: {integrity: sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      postcss: ^8.0.0

  postcss-js@4.0.1:
    resolution: {integrity: sha512-dDLF8pEO191hJMtlHFPRa8xsizHaM82MLfNkUHdUtVEV3tgTp5oj+8qbEqYM57SLfc74KSbw//4SeJma2LRVIw==}
    engines: {node: ^12 || ^14 || >= 16}
    peerDependencies:
      postcss: ^8.4.21

  postcss-load-config@4.0.2:
    resolution: {integrity: sha512-bSVhyJGL00wMVoPUzAVAnbEoWyqRxkjv64tUl427SKnPrENtq6hJwUojroMz2VB+Q1edmi4IfrAPpami5VVgMQ==}
    engines: {node: '>= 14'}
    peerDependencies:
      postcss: '>=8.0.9'
      ts-node: '>=9.0.0'
    peerDependenciesMeta:
      postcss:
        optional: true
      ts-node:
        optional: true

  postcss-nested@6.2.0:
    resolution: {integrity: sha512-HQbt28KulC5AJzG+cZtj9kvKB93CFCdLvog1WFLf1D+xmMvPGlBstkpTEZfK5+AN9hfJocyBFCNiqyS48bpgzQ==}
    engines: {node: '>=12.0'}
    peerDependencies:
      postcss: ^8.2.14

  postcss-selector-parser@6.0.10:
    resolution: {integrity: sha512-IQ7TZdoaqbT+LCpShg46jnZVlhWD2w6iQYAcYXfHARZ7X1t/UGhhceQDs5X0cGqKvYlHNOuv7Oa1xmb0oQuA3w==}
    engines: {node: '>=4'}

  postcss-selector-parser@6.1.2:
    resolution: {integrity: sha512-Q8qQfPiZ+THO/3ZrOrO0cJJKfpYCagtMUkXbnEfmgUjwXg6z/WBeOyS9APBBPCTSiDV+s4SwQGu8yFsiMRIudg==}
    engines: {node: '>=4'}

  postcss-value-parser@4.2.0:
    resolution: {integrity: sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==}

  postcss@8.4.31:
    resolution: {integrity: sha512-PS08Iboia9mts/2ygV3eLpY5ghnUcfLV/EXTOW1E2qYxJKGGBUtNjN76FYHnMs36RmARn41bC0AZmn+rR0OVpQ==}
    engines: {node: ^10 || ^12 || >=14}

  postcss@8.5.3:
    resolution: {integrity: sha512-dle9A3yYxlBSrt8Fu+IpjGT8SY8hN0mlaA6GY8t0P5PjIOZemULz/E2Bnm/2dcUOena75OTNkHI76uZBNUUq3A==}
    engines: {node: ^10 || ^12 || >=14}

  prelude-ls@1.2.1:
    resolution: {integrity: sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==}
    engines: {node: '>= 0.8.0'}

  pretty-format@29.7.0:
    resolution: {integrity: sha512-Pdlw/oPxN+aXdmM9R00JVC9WVFoCLTKJvDVLgmJ+qAffBMxsV85l/Lu7sNx4zSzPyoL2euImuEwHhOXdEgNFZQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  prismjs@1.27.0:
    resolution: {integrity: sha512-t13BGPUlFDR7wRB5kQDG4jjl7XeuH6jbJGt11JHPL96qwsEHNX2+68tFXqc1/k+/jALsbSWJKUOT/hcYAZ5LkA==}
    engines: {node: '>=6'}

  prismjs@1.30.0:
    resolution: {integrity: sha512-DEvV2ZF2r2/63V+tK8hQvrR2ZGn10srHbXviTlcv7Kpzw8jWiNTqbVgjO3IY8RxrrOUF8VPMQQFysYYYv0YZxw==}
    engines: {node: '>=6'}

  process-nextick-args@2.0.1:
    resolution: {integrity: sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==}

  prompts@2.4.2:
    resolution: {integrity: sha512-NxNv/kLguCA7p3jE8oL2aEBsrJWgAakBpgmgK6lpPWV+WuOmY6r2/zbAVnP+T8bQlA0nzHXSJSJW0Hq7ylaD2Q==}
    engines: {node: '>= 6'}

  prop-types@15.8.1:
    resolution: {integrity: sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==}

  property-information@5.6.0:
    resolution: {integrity: sha512-YUHSPk+A30YPv+0Qf8i9Mbfe/C0hdPXk1s1jPVToV8pk8BQtpw10ct89Eo7OWkutrwqvT0eicAxlOg3dOAu8JA==}

  property-information@6.5.0:
    resolution: {integrity: sha512-PgTgs/BlvHxOu8QuEN7wi5A0OmXaBcHpmCSTehcs6Uuu9IkDIEo13Hy7n898RHfrQ49vKCoGeWZSaAK01nwVig==}

  property-information@7.0.0:
    resolution: {integrity: sha512-7D/qOz/+Y4X/rzSB6jKxKUsQnphO046ei8qxG59mtM3RG3DHgTK81HrxrmoDVINJb8NKT5ZsRbwHvQ6B68Iyhg==}

  proxy-from-env@1.1.0:
    resolution: {integrity: sha512-D+zkORCbA9f1tdWRK0RaCR3GPv50cMxcrz4X8k5LTSUD1Dkw47mKJEZQNunItRTkWwgtaUSo1RVFRIG9ZXiFYg==}

  psl@1.15.0:
    resolution: {integrity: sha512-JZd3gMVBAVQkSs6HdNZo9Sdo0LNcQeMNP3CozBJb3JYC/QUYZTnKxP+f8oWRX4rHP5EurWxqAHTSwUCjlNKa1w==}

  pump@2.0.1:
    resolution: {integrity: sha512-ruPMNRkN3MHP1cWJc9OWr+T/xDP0jhXYCLfJcBuX54hhfIBnaQmAUMfDcG4DM5UMWByBbJY69QSphm3jtDKIkA==}

  punycode@2.3.1:
    resolution: {integrity: sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==}
    engines: {node: '>=6'}

  pure-rand@6.1.0:
    resolution: {integrity: sha512-bVWawvoZoBYpp6yIoQtQXHZjmz35RSVHnUOTefl8Vcjr8snTPY1wnpSPMWekcFwbxI6gtmT7rSYPFvz71ldiOA==}

  qs@6.14.0:
    resolution: {integrity: sha512-YWWTjgABSKcvs/nWBi9PycY/JiPJqOD4JA6o9Sej2AtvSGarXxKC3OQSk4pAarbdQlKAh5D4FCQkJNkW+GAn3w==}
    engines: {node: '>=0.6'}

  qs@6.5.3:
    resolution: {integrity: sha512-qxXIEh4pCGfHICj1mAJQ2/2XVZkjCDTcEgfoSQxc/fYivUZxTkk7L3bDBJSoNrEzXI17oUO5Dp07ktqE5KzczA==}
    engines: {node: '>=0.6'}

  querystringify@2.2.0:
    resolution: {integrity: sha512-FIqgj2EUvTa7R50u0rGsyTftzjYmv/a3hO345bZNrqabNqjtgiDMgmo4mkUjd+nzU5oF3dClKqFIPUKybUyqoQ==}

  queue-microtask@1.2.3:
    resolution: {integrity: sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==}

  react-dom@18.3.1:
    resolution: {integrity: sha512-5m4nQKp+rZRb09LNH59GM4BxTh9251/ylbKIbpe7TpGxfJ+9kv6BLkLBXIjjspbgbnIBNqlI23tRnTWT0snUIw==}
    peerDependencies:
      react: ^18.3.1

  react-dropzone@14.3.8:
    resolution: {integrity: sha512-sBgODnq+lcA4P296DY4wacOZz3JFpD99fp+hb//iBO2HHnyeZU3FwWyXJ6salNpqQdsZrgMrotuko/BdJMV8Ug==}
    engines: {node: '>= 10.13'}
    peerDependencies:
      react: '>= 16.8 || 18.0.0'

  react-error-boundary@5.0.0:
    resolution: {integrity: sha512-tnjAxG+IkpLephNcePNA7v6F/QpWLH8He65+DmedchDwg162JZqx4NmbXj0mlAYVVEd81OW7aFhmbsScYfiAFQ==}
    peerDependencies:
      react: '>=16.13.1'

  react-fast-compare@3.2.2:
    resolution: {integrity: sha512-nsO+KSNgo1SbJqJEYRE9ERzo7YtYbou/OqjSQKxV7jcKox7+usiUVZOAC+XnDOABXggQTno0Y1CpVnuWEc1boQ==}

  react-helmet-async@2.0.5:
    resolution: {integrity: sha512-rYUYHeus+i27MvFE+Jaa4WsyBKGkL6qVgbJvSBoX8mbsWoABJXdEO0bZyi0F6i+4f0NuIb8AvqPMj3iXFHkMwg==}
    peerDependencies:
      react: ^16.6.0 || ^17.0.0 || ^18.0.0

  react-hook-form@7.54.2:
    resolution: {integrity: sha512-eHpAUgUjWbZocoQYUHposymRb4ZP6d0uwUnooL2uOybA9/3tPUvoAKqEWK1WaSiTxxOfTpffNZP7QwlnM3/gEg==}
    engines: {node: '>=18.0.0'}
    peerDependencies:
      react: ^16.8.0 || ^17 || ^18 || ^19

  react-hot-toast@2.5.2:
    resolution: {integrity: sha512-Tun3BbCxzmXXM7C+NI4qiv6lT0uwGh4oAfeJyNOjYUejTsm35mK9iCaYLGv8cBz9L5YxZLx/2ii7zsIwPtPUdw==}
    engines: {node: '>=10'}
    peerDependencies:
      react: '>=16'
      react-dom: '>=16'

  react-icons@5.5.0:
    resolution: {integrity: sha512-MEFcXdkP3dLo8uumGI5xN3lDFNsRtrjbOEKDLD7yv76v4wpnEq2Lt2qeHaQOr34I/wPN3s3+N08WkQ+CW37Xiw==}
    peerDependencies:
      react: '*'

  react-is@16.13.1:
    resolution: {integrity: sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==}

  react-is@18.3.1:
    resolution: {integrity: sha512-/LLMVyas0ljjAtoYiPqYiL8VWXzUUdThrmU5+n20DZv+a+ClRoevUzw5JxU+Ieh5/c87ytoTBV9G1FiKfNJdmg==}

  react-is@19.0.0:
    resolution: {integrity: sha512-H91OHcwjZsbq3ClIDHMzBShc1rotbfACdWENsmEf0IFvZ3FgGPtdHMcsv45bQ1hAbgdfiA8SnxTKfDS+x/8m2g==}

  react-markdown@10.1.0:
    resolution: {integrity: sha512-qKxVopLT/TyA6BX3Ue5NwabOsAzm0Q7kAPwq6L+wWDwisYs7R8vZ0nRXqq6rkueboxpkjvLGU9fWifiX/ZZFxQ==}
    peerDependencies:
      '@types/react': '>=18'
      react: '>=18'

  react-markdown@9.0.3:
    resolution: {integrity: sha512-Yk7Z94dbgYTOrdk41Z74GoKA7rThnsbbqBTRYuxoe08qvfQ9tJVhmAKw6BJS/ZORG7kTy/s1QvYzSuaoBA1qfw==}
    peerDependencies:
      '@types/react': '>=18'
      react: '>=18'

  react-refresh@0.14.2:
    resolution: {integrity: sha512-jCvmsr+1IUSMUyzOkRcvnVbX3ZYC6g9TDrDbFuFmRDq7PD4yaGbLKNQL6k2jnArV8hjYxh7hVhAZB6s9HDGpZA==}
    engines: {node: '>=0.10.0'}

  react-remove-scroll-bar@2.3.8:
    resolution: {integrity: sha512-9r+yi9+mgU33AKcj6IbT9oRCO78WriSj6t/cF8DWBZJ9aOGPOTEDvdUDz1FwKim7QXWwmHqtdHnRJfhAxEG46Q==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react-remove-scroll@2.6.3:
    resolution: {integrity: sha512-pnAi91oOk8g8ABQKGF5/M9qxmmOPxaAnopyTHYfqYEwJhyFrbbBtHuSgtKEoH0jpcxx5o3hXqH1mNd9/Oi+8iQ==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react-router-dom@6.30.0:
    resolution: {integrity: sha512-x30B78HV5tFk8ex0ITwzC9TTZMua4jGyA9IUlH1JLQYQTFyxr/ZxwOJq7evg1JX1qGVUcvhsmQSKdPncQrjTgA==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      react: '>=16.8'
      react-dom: '>=16.8'

  react-router@6.30.0:
    resolution: {integrity: sha512-D3X8FyH9nBcTSHGdEKurK7r8OYE1kKFn3d/CF+CoxbSHkxU7o37+Uh7eAHRXr6k2tSExXYO++07PeXJtA/dEhQ==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      react: '>=16.8'

  react-style-singleton@2.2.3:
    resolution: {integrity: sha512-b6jSvxvVnyptAiLjbkWLE/lOnR4lfTtDAl+eUC7RZy+QQWc6wRzIV2CE6xBuMmDxc2qIihtDCZD5NPOFl7fRBQ==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react-syntax-highlighter@15.6.1:
    resolution: {integrity: sha512-OqJ2/vL7lEeV5zTJyG7kmARppUjiB9h9udl4qHQjjgEos66z00Ia0OckwYfRxCSFrW8RJIBnsBwQsHZbVPspqg==}
    peerDependencies:
      react: '>= 0.14.0'

  react-transition-group@4.4.5:
    resolution: {integrity: sha512-pZcd1MCJoiKiBR2NRxeCRg13uCXbydPnmB4EOeRrY7480qNWO8IIgQG6zlDkm6uRMsURXPuKq0GWtiM59a5Q6g==}
    peerDependencies:
      react: '>=16.6.0'
      react-dom: '>=16.6.0'

  react@18.3.1:
    resolution: {integrity: sha512-wS+hAgJShR0KhEvPJArfuPVN1+Hz1t0Y6n5jLrGQbkb4urgPE/0Rve+1kMB1v/oWgHgm4WIcV+i7F2pTVj+2iQ==}
    engines: {node: '>=0.10.0'}

  read-cache@1.0.0:
    resolution: {integrity: sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==}

  readable-stream@2.3.8:
    resolution: {integrity: sha512-8p0AUk4XODgIewSi0l8Epjs+EVnWiK7NoDIEGU0HhE7+ZyY8D1IMY7odu5lRrFXGg71L15KG8QrPmum45RTtdA==}

  readdirp@3.6.0:
    resolution: {integrity: sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==}
    engines: {node: '>=8.10.0'}

  reflect.getprototypeof@1.0.10:
    resolution: {integrity: sha512-00o4I+DVrefhv+nX0ulyi3biSHCPDe+yLv5o/p6d/UVlirijB8E16FtfwSAi4g3tcqrQ4lRAqQSoFEZJehYEcw==}
    engines: {node: '>= 0.4'}

  refractor@3.6.0:
    resolution: {integrity: sha512-MY9W41IOWxxk31o+YvFCNyNzdkc9M20NoZK5vq6jkv4I/uh2zkWcfudj0Q1fovjUQJrNewS9NMzeTtqPf+n5EA==}

  refractor@4.9.0:
    resolution: {integrity: sha512-nEG1SPXFoGGx+dcjftjv8cAjEusIh6ED1xhf5DG3C0x/k+rmZ2duKnc3QLpt6qeHv5fPb8uwN3VWN2BT7fr3Og==}

  regenerator-runtime@0.14.1:
    resolution: {integrity: sha512-dYnhHh0nJoMfnkZs6GmmhFknAGRrLznOu5nc9ML+EJxGvrx6H7teuevqVqCuPcPK//3eDrrjQhehXVx9cnkGdw==}

  regexp.prototype.flags@1.5.4:
    resolution: {integrity: sha512-dYqgNSZbDwkaJ2ceRd9ojCGjBq+mOm9LmtXnAnEGyHhN/5R7iDW2TRw3h+o/jCFxus3P2LfWIIiwowAjANm7IA==}
    engines: {node: '>= 0.4'}

  rehype-attr@3.0.3:
    resolution: {integrity: sha512-Up50Xfra8tyxnkJdCzLBIBtxOcB2M1xdeKe1324U06RAvSjYm7ULSeoM+b/nYPQPVd7jsXJ9+39IG1WAJPXONw==}
    engines: {node: '>=16'}

  rehype-autolink-headings@7.1.0:
    resolution: {integrity: sha512-rItO/pSdvnvsP4QRB1pmPiNHUskikqtPojZKJPPPAVx9Hj8i8TwMBhofrrAYRhYOOBZH9tgmG5lPqDLuIWPWmw==}

  rehype-ignore@2.0.2:
    resolution: {integrity: sha512-BpAT/3lU9DMJ2siYVD/dSR0A/zQgD6Fb+fxkJd4j+wDVy6TYbYpK+FZqu8eM9EuNKGvi4BJR7XTZ/+zF02Dq8w==}
    engines: {node: '>=16'}

  rehype-parse@9.0.1:
    resolution: {integrity: sha512-ksCzCD0Fgfh7trPDxr2rSylbwq9iYDkSn8TCDmEJ49ljEUBxDVCzCHv7QNzZOfODanX4+bWQ4WZqLCRWYLfhag==}

  rehype-prism-plus@2.0.0:
    resolution: {integrity: sha512-FeM/9V2N7EvDZVdR2dqhAzlw5YI49m9Tgn7ZrYJeYHIahM6gcXpH0K1y2gNnKanZCydOMluJvX2cB9z3lhY8XQ==}

  rehype-raw@7.0.0:
    resolution: {integrity: sha512-/aE8hCfKlQeA8LmyeyQvQF3eBiLRGNlfBJEvWH7ivp9sBqs7TNqBL5X3v157rM4IFETqDnIOO+z5M/biZbo9Ww==}

  rehype-rewrite@4.0.2:
    resolution: {integrity: sha512-rjLJ3z6fIV11phwCqHp/KRo8xuUCO8o9bFJCNw5o6O2wlLk6g8r323aRswdGBQwfXPFYeSuZdAjp4tzo6RGqEg==}
    engines: {node: '>=16.0.0'}

  rehype-sanitize@6.0.0:
    resolution: {integrity: sha512-CsnhKNsyI8Tub6L4sm5ZFsme4puGfc6pYylvXo1AeqaGbjOYyzNv3qZPwvs0oMJ39eryyeOdmxwUIo94IpEhqg==}

  rehype-slug@6.0.0:
    resolution: {integrity: sha512-lWyvf/jwu+oS5+hL5eClVd3hNdmwM1kAC0BUvEGD19pajQMIzcNUd/k9GsfQ+FfECvX+JE+e9/btsKH0EjJT6A==}

  rehype-stringify@10.0.1:
    resolution: {integrity: sha512-k9ecfXHmIPuFVI61B9DeLPN0qFHfawM6RsuX48hoqlaKSF61RskNjSm1lI8PhBEM0MRdLxVVm4WmTqJQccH9mA==}

  rehype@13.0.2:
    resolution: {integrity: sha512-j31mdaRFrwFRUIlxGeuPXXKWQxet52RBQRvCmzl5eCefn/KGbomK5GMHNMsOJf55fgo3qw5tST5neDuarDYR2A==}

  remark-gfm@4.0.1:
    resolution: {integrity: sha512-1quofZ2RQ9EWdeN34S79+KExV1764+wCUGop5CPL1WGdD0ocPpu91lzPGbwWMECpEpd42kJGQwzRfyov9j4yNg==}

  remark-github-blockquote-alert@1.3.0:
    resolution: {integrity: sha512-cwkBA4x+VH4J2VAMzhbmSeAmK5tBd5iwesgSUUQuRtuQ48XQm6sXXNLY9PR7ohZmZiqMeoDMUGCTur5zwR4lTQ==}
    engines: {node: '>=16'}

  remark-parse@11.0.0:
    resolution: {integrity: sha512-FCxlKLNGknS5ba/1lmpYijMUzX2esxW5xQqjWxw2eHFfS2MSdaHVINFmhjo+qN1WhZhNimq0dZATN9pH0IDrpA==}

  remark-rehype@11.1.1:
    resolution: {integrity: sha512-g/osARvjkBXb6Wo0XvAeXQohVta8i84ACbenPpoSsxTOQH/Ae0/RGP4WZgnMH5pMLpsj4FG7OHmcIcXxpza8eQ==}

  remark-stringify@11.0.0:
    resolution: {integrity: sha512-1OSmLd3awB/t8qdoEOMazZkNsfVTeY4fTsgzcQFdXNq8ToTN4ZGwrMnlda4K6smTFKD+GRV6O48i6Z4iKgPPpw==}

  request-promise-core@1.1.3:
    resolution: {integrity: sha512-QIs2+ArIGQVp5ZYbWD5ZLCY29D5CfWizP8eWnm8FoGD1TX61veauETVQbrV60662V0oFBkrDOuaBI8XgtuyYAQ==}
    engines: {node: '>=0.10.0'}
    peerDependencies:
      request: ^2.34

  request@2.88.2:
    resolution: {integrity: sha512-MsvtOrfG9ZcrOwAW+Qi+F6HbD0CWXEh9ou77uOb7FM2WPhwT7smM833PzanhJLsgXjN89Ir6V2PczXNnMpwKhw==}
    engines: {node: '>= 6'}
    deprecated: request has been deprecated, see https://github.com/request/request/issues/3142

  require-directory@2.1.1:
    resolution: {integrity: sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==}
    engines: {node: '>=0.10.0'}

  requires-port@1.0.0:
    resolution: {integrity: sha512-KigOCHcocU3XODJxsu8i/j8T9tzT4adHiecwORRQ0ZZFcp7ahwXuRU1m+yuO90C5ZUyGeGfocHDI14M3L3yDAQ==}

  resolve-cwd@3.0.0:
    resolution: {integrity: sha512-OrZaX2Mb+rJCpH/6CpSqt9xFVpN++x01XnN2ie9g6P5/3xelLAkXWVADpdz1IHD/KFfEXyE6V0U01OQ3UO2rEg==}
    engines: {node: '>=8'}

  resolve-from@4.0.0:
    resolution: {integrity: sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==}
    engines: {node: '>=4'}

  resolve-from@5.0.0:
    resolution: {integrity: sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==}
    engines: {node: '>=8'}

  resolve.exports@2.0.3:
    resolution: {integrity: sha512-OcXjMsGdhL4XnbShKpAcSqPMzQoYkYyhbEaeSko47MjRP9NfEQMhZkXL1DoFlt9LWQn4YttrdnV6X2OiyzBi+A==}
    engines: {node: '>=10'}

  resolve@1.22.10:
    resolution: {integrity: sha512-NPRy+/ncIMeDlTAsuqwKIiferiawhefFJtkNSW0qZJEqMEb+qBt/77B/jGeeek+F0uOeN05CDa6HXbbIgtVX4w==}
    engines: {node: '>= 0.4'}
    hasBin: true

  reusify@1.1.0:
    resolution: {integrity: sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==}
    engines: {iojs: '>=1.0.0', node: '>=0.10.0'}

  rimraf@3.0.2:
    resolution: {integrity: sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==}
    deprecated: Rimraf versions prior to v4 are no longer supported
    hasBin: true

  rollup@4.36.0:
    resolution: {integrity: sha512-zwATAXNQxUcd40zgtQG0ZafcRK4g004WtEl7kbuhTWPvf07PsfohXl39jVUvPF7jvNAIkKPQ2XrsDlWuxBd++Q==}
    engines: {node: '>=18.0.0', npm: '>=8.0.0'}
    hasBin: true

  run-parallel@1.2.0:
    resolution: {integrity: sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==}

  safe-array-concat@1.1.3:
    resolution: {integrity: sha512-AURm5f0jYEOydBj7VQlVvDrjeFgthDdEF5H1dP+6mNpoXOMo1quQqJ4wvJDyRZ9+pO3kGWoOdmV08cSv2aJV6Q==}
    engines: {node: '>=0.4'}

  safe-buffer@5.1.2:
    resolution: {integrity: sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==}

  safe-buffer@5.2.1:
    resolution: {integrity: sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==}

  safe-push-apply@1.0.0:
    resolution: {integrity: sha512-iKE9w/Z7xCzUMIZqdBsp6pEQvwuEebH4vdpjcDWnyzaI6yl6O9FHvVpmGelvEHNsoY6wGblkxR6Zty/h00WiSA==}
    engines: {node: '>= 0.4'}

  safe-regex-test@1.1.0:
    resolution: {integrity: sha512-x/+Cz4YrimQxQccJf5mKEbIa1NzeCRNI5Ecl/ekmlYaampdNLPalVyIcCZNNH3MvmqBugV5TMYZXv0ljslUlaw==}
    engines: {node: '>= 0.4'}

  safer-buffer@2.1.2:
    resolution: {integrity: sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==}

  scheduler@0.23.2:
    resolution: {integrity: sha512-UOShsPwz7NrMUqhR6t0hWjFduvOzbtv7toDH1/hIrfRNIDBnnBWd0CwJTGvTpngVlmwGCdP9/Zl/tVrDqcuYzQ==}

  semver@6.3.1:
    resolution: {integrity: sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==}
    hasBin: true

  semver@7.7.1:
    resolution: {integrity: sha512-hlq8tAfn0m/61p4BVRcPzIGr6LKiMwo4VM6dGi6pt4qcRkmNzTcWq6eCEjEh+qXjkMDvPlOFFSGwQjoEa6gyMA==}
    engines: {node: '>=10'}
    hasBin: true

  set-function-length@1.2.2:
    resolution: {integrity: sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==}
    engines: {node: '>= 0.4'}

  set-function-name@2.0.2:
    resolution: {integrity: sha512-7PGFlmtwsEADb0WYyvCMa1t+yke6daIG4Wirafur5kcf+MhUnPms1UeR0CKQdTZD81yESwMHbtn+TR+dMviakQ==}
    engines: {node: '>= 0.4'}

  set-proto@1.0.0:
    resolution: {integrity: sha512-RJRdvCo6IAnPdsvP/7m6bsQqNnn1FCBX5ZNtFL98MmFF/4xAIJTIg1YbHW5DC2W5SKZanrC6i4HsJqlajw/dZw==}
    engines: {node: '>= 0.4'}

  shallowequal@1.1.0:
    resolution: {integrity: sha512-y0m1JoUZSlPAjXVtPPW70aZWfIL/dSP7AFkRnniLCrK/8MDKog3TySTBmckD+RObVxH0v4Tox67+F14PdED2oQ==}

  sharp@0.33.5:
    resolution: {integrity: sha512-haPVm1EkS9pgvHrQ/F3Xy+hgcuMV0Wm9vfIBSiwZ05k+xgb0PkBQpGsAA/oWdDobNaZTH5ppvHtzCFbnSEwHVw==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}

  shebang-command@2.0.0:
    resolution: {integrity: sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==}
    engines: {node: '>=8'}

  shebang-regex@3.0.0:
    resolution: {integrity: sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==}
    engines: {node: '>=8'}

  side-channel-list@1.0.0:
    resolution: {integrity: sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==}
    engines: {node: '>= 0.4'}

  side-channel-map@1.0.1:
    resolution: {integrity: sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==}
    engines: {node: '>= 0.4'}

  side-channel-weakmap@1.0.2:
    resolution: {integrity: sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==}
    engines: {node: '>= 0.4'}

  side-channel@1.1.0:
    resolution: {integrity: sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==}
    engines: {node: '>= 0.4'}

  signal-exit@3.0.7:
    resolution: {integrity: sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==}

  signal-exit@4.1.0:
    resolution: {integrity: sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==}
    engines: {node: '>=14'}

  simple-swizzle@0.2.2:
    resolution: {integrity: sha512-JA//kQgZtbuY83m+xT+tXJkmJncGMTFT+C+g2h2R9uxkYIrE2yy9sgmcLhCnw57/WSD+Eh3J97FPEDFnbXnDUg==}

  sisteransi@1.0.5:
    resolution: {integrity: sha512-bLGGlR1QxBcynn2d5YmDX4MGjlZvy2MRBDRNHLJ8VI6l6+9FUiyTFNJ0IveOSP0bcXgVDPRcfGqA0pjaqUpfVg==}

  slash@3.0.0:
    resolution: {integrity: sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==}
    engines: {node: '>=8'}

  sorted-array-functions@1.3.0:
    resolution: {integrity: sha512-2sqgzeFlid6N4Z2fUQ1cvFmTOLRi/sEDzSQ0OKYchqgoPmQBVyM3959qYx3fpS6Esef80KjmpgPeEr028dP3OA==}

  source-map-js@1.2.1:
    resolution: {integrity: sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==}
    engines: {node: '>=0.10.0'}

  source-map-support@0.5.13:
    resolution: {integrity: sha512-SHSKFHadjVA5oR4PPqhtAVdcBWwRYVd6g6cAXnIbRiIwc2EhPrTuKUBdSLvlEKyIP3GCf89fltvcZiP9MMFA1w==}

  source-map-support@0.5.21:
    resolution: {integrity: sha512-uBHU3L3czsIyYXKX88fdrGovxdSCoTGDRZ6SYXtSRxLZUzHg5P/66Ht6uoUlHu9EZod+inXhKo3qQgwXUT/y1w==}

  source-map@0.5.7:
    resolution: {integrity: sha512-LbrmJOMUSdEVxIKvdcJzQC+nQhe8FUZQTXQy6+I75skNgn3OoQ0DZA8YnFa7gp8tqtL3KPf1kmo0R5DoApeSGQ==}
    engines: {node: '>=0.10.0'}

  source-map@0.6.1:
    resolution: {integrity: sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==}
    engines: {node: '>=0.10.0'}

  space-separated-tokens@1.1.5:
    resolution: {integrity: sha512-q/JSVd1Lptzhf5bkYm4ob4iWPjx0KiRe3sRFBNrVqbJkFaBm5vbbowy1mymoPNLRa52+oadOhJ+K49wsSeSjTA==}

  space-separated-tokens@2.0.2:
    resolution: {integrity: sha512-PEGlAwrG8yXGXRjW32fGbg66JAlOAwbObuqVoJpv/mRgoWDQfgH1wDPvtzWyUSNAXBGSk8h755YDbbcEy3SH2Q==}

  sprintf-js@1.0.3:
    resolution: {integrity: sha512-D9cPgkvLlV3t3IzL0D0YLvGA9Ahk4PcvVwUbN0dSGr1aP0Nrt4AEnTUbuGvquEC0mA64Gqt1fzirlRs5ibXx8g==}

  sshpk@1.18.0:
    resolution: {integrity: sha512-2p2KJZTSqQ/I3+HX42EpYOa2l3f8Erv8MWKsy2I9uf4wA7yFIkXRffYdsx86y6z4vHtV8u7g+pPlr8/4ouAxsQ==}
    engines: {node: '>=0.10.0'}
    hasBin: true

  stack-utils@2.0.6:
    resolution: {integrity: sha512-XlkWvfIm6RmsWtNJx+uqtKLS8eqFbxUg0ZzLXqY0caEy9l7hruX8IpiDnjsLavoBgqCCR71TqWO8MaXYheJ3RQ==}
    engines: {node: '>=10'}

  state-local@1.0.7:
    resolution: {integrity: sha512-HTEHMNieakEnoe33shBYcZ7NX83ACUjCu8c40iOGEZsngj9zRnkqS9j1pqQPXwobB0ZcVTk27REb7COQ0UR59w==}

  stealthy-require@1.1.1:
    resolution: {integrity: sha512-ZnWpYnYugiOVEY5GkcuJK1io5V8QmNYChG62gSit9pQVGErXtrKuPC55ITaVSukmMta5qpMU7vqLt2Lnni4f/g==}
    engines: {node: '>=0.10.0'}

  streamsearch@1.1.0:
    resolution: {integrity: sha512-Mcc5wHehp9aXz1ax6bZUyY5afg9u2rv5cqQI3mRrYkGC8rW2hM02jWuwjtL++LS5qinSyhj2QfLyNsuc+VsExg==}
    engines: {node: '>=10.0.0'}

  string-length@4.0.2:
    resolution: {integrity: sha512-+l6rNN5fYHNhZZy41RXsYptCjA2Igmq4EG7kZAYFQI1E1VTXarr6ZPXBg6eq7Y6eK4FEhY6AJlyuFIb/v/S0VQ==}
    engines: {node: '>=10'}

  string-width@4.2.3:
    resolution: {integrity: sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==}
    engines: {node: '>=8'}

  string-width@5.1.2:
    resolution: {integrity: sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==}
    engines: {node: '>=12'}

  string.prototype.trim@1.2.10:
    resolution: {integrity: sha512-Rs66F0P/1kedk5lyYyH9uBzuiI/kNRmwJAR9quK6VOtIpZ2G+hMZd+HQbbv25MgCA6gEffoMZYxlTod4WcdrKA==}
    engines: {node: '>= 0.4'}

  string.prototype.trimend@1.0.9:
    resolution: {integrity: sha512-G7Ok5C6E/j4SGfyLCloXTrngQIQU3PWtXGst3yM7Bea9FRURf1S42ZHlZZtsNque2FN2PoUhfZXYLNWwEr4dLQ==}
    engines: {node: '>= 0.4'}

  string.prototype.trimstart@1.0.8:
    resolution: {integrity: sha512-UXSH262CSZY1tfu3G3Secr6uGLCFVPMhIqHjlgCUtCCcgihYc/xKs9djMTMUOb2j1mVSeU8EU6NWc/iQKU6Gfg==}
    engines: {node: '>= 0.4'}

  string_decoder@1.1.1:
    resolution: {integrity: sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==}

  stringify-entities@4.0.4:
    resolution: {integrity: sha512-IwfBptatlO+QCJUo19AqvrPNqlVMpW9YEL2LIVY+Rpv2qsjCGxaDLNRgeGsQWJhfItebuJhsGSLjaBbNSQ+ieg==}

  strip-ansi@6.0.1:
    resolution: {integrity: sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==}
    engines: {node: '>=8'}

  strip-ansi@7.1.0:
    resolution: {integrity: sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==}
    engines: {node: '>=12'}

  strip-bom@4.0.0:
    resolution: {integrity: sha512-3xurFv5tEgii33Zi8Jtp55wEIILR9eh34FAW00PZf+JnSsTmV/ioewSgQl97JHvgjoRGwPShsWm+IdrxB35d0w==}
    engines: {node: '>=8'}

  strip-final-newline@2.0.0:
    resolution: {integrity: sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA==}
    engines: {node: '>=6'}

  strip-json-comments@3.1.1:
    resolution: {integrity: sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==}
    engines: {node: '>=8'}

  style-to-js@1.1.16:
    resolution: {integrity: sha512-/Q6ld50hKYPH3d/r6nr117TZkHR0w0kGGIVfpG9N6D8NymRPM9RqCUv4pRpJ62E5DqOYx2AFpbZMyCPnjQCnOw==}

  style-to-object@1.0.8:
    resolution: {integrity: sha512-xT47I/Eo0rwJmaXC4oilDGDWLohVhR6o/xAQcPQN8q6QBuZVL8qMYL85kLmST5cPjAorwvqIA4qXTRQoYHaL6g==}

  styled-jsx@5.1.6:
    resolution: {integrit