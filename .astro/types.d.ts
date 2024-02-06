declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>,
				import('astro/zod').ZodLiteral<'avif'>,
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<[BaseSchemaWithoutEffects, ...BaseSchemaWithoutEffects[]]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<BaseSchemaWithoutEffects, BaseSchemaWithoutEffects>;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"certificates": {
"cryptography.md": {
	id: "cryptography.md";
  slug: "cryptography";
  body: string;
  collection: "certificates";
  data: InferEntrySchema<"certificates">
} & { render(): Render[".md"] };
"opensource.md": {
	id: "opensource.md";
  slug: "opensource";
  body: string;
  collection: "certificates";
  data: InferEntrySchema<"certificates">
} & { render(): Render[".md"] };
"python.md": {
	id: "python.md";
  slug: "python";
  body: string;
  collection: "certificates";
  data: InferEntrySchema<"certificates">
} & { render(): Render[".md"] };
};
"companies": {
"alphasofthub.md": {
	id: "alphasofthub.md";
  slug: "alphasofthub";
  body: string;
  collection: "companies";
  data: InferEntrySchema<"companies">
} & { render(): Render[".md"] };
"alphaz.md": {
	id: "alphaz.md";
  slug: "alphaz";
  body: string;
  collection: "companies";
  data: InferEntrySchema<"companies">
} & { render(): Render[".md"] };
"direct.md": {
	id: "direct.md";
  slug: "direct";
  body: string;
  collection: "companies";
  data: InferEntrySchema<"companies">
} & { render(): Render[".md"] };
"fiverr.md": {
	id: "fiverr.md";
  slug: "fiverr";
  body: string;
  collection: "companies";
  data: InferEntrySchema<"companies">
} & { render(): Render[".md"] };
"mennr.md": {
	id: "mennr.md";
  slug: "mennr";
  body: string;
  collection: "companies";
  data: InferEntrySchema<"companies">
} & { render(): Render[".md"] };
"projects.md": {
	id: "projects.md";
  slug: "projects";
  body: string;
  collection: "companies";
  data: InferEntrySchema<"companies">
} & { render(): Render[".md"] };
"resourcesr.md": {
	id: "resourcesr.md";
  slug: "resourcesr";
  body: string;
  collection: "companies";
  data: InferEntrySchema<"companies">
} & { render(): Render[".md"] };
"riphah.md": {
	id: "riphah.md";
  slug: "riphah";
  body: string;
  collection: "companies";
  data: InferEntrySchema<"companies">
} & { render(): Render[".md"] };
"upwork.md": {
	id: "upwork.md";
  slug: "upwork";
  body: string;
  collection: "companies";
  data: InferEntrySchema<"companies">
} & { render(): Render[".md"] };
};
"educations": {
"bachelor.md": {
	id: "bachelor.md";
  slug: "bachelor";
  body: string;
  collection: "educations";
  data: InferEntrySchema<"educations">
} & { render(): Render[".md"] };
"college.md": {
	id: "college.md";
  slug: "college";
  body: string;
  collection: "educations";
  data: InferEntrySchema<"educations">
} & { render(): Render[".md"] };
"school.md": {
	id: "school.md";
  slug: "school";
  body: string;
  collection: "educations";
  data: InferEntrySchema<"educations">
} & { render(): Render[".md"] };
};
"projects": {
"alphaz_app.md": {
	id: "alphaz_app.md";
  slug: "alphaz";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"alphaz_com.md": {
	id: "alphaz_com.md";
  slug: "alphaz_com";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"alphaz_framework.md": {
	id: "alphaz_framework.md";
  slug: "alphaz_framework";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"alphaz_website.md": {
	id: "alphaz_website.md";
  slug: "alphaz_web";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"ash_alphasofthub.md": {
	id: "ash_alphasofthub.md";
  slug: "alphasofthub_ash";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"ash_covid19.md": {
	id: "ash_covid19.md";
  slug: "covid19_ash";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"ash_oldsite.md": {
	id: "ash_oldsite.md";
  slug: "ash_oldsite";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"ash_validity.md": {
	id: "ash_validity.md";
  slug: "validity_ash";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"ash_webharvest.md": {
	id: "ash_webharvest.md";
  slug: "webharvest";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"direct_ lumberjackgame.md": {
	id: "direct_ lumberjackgame.md";
  slug: "direct_lumberjackgame";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"direct_ainda.md": {
	id: "direct_ainda.md";
  slug: "direct_ainda";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"direct_spendbtc.md": {
	id: "direct_spendbtc.md";
  slug: "direct_spendbtc";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"fiverr_bkash.md": {
	id: "fiverr_bkash.md";
  slug: "fiverr_bkash";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"freelance_php.md": {
	id: "freelance_php.md";
  slug: "freelance_php";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"mennr_crunchbase.md": {
	id: "mennr_crunchbase.md";
  slug: "mennr_crunchbase";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"others_board.md": {
	id: "others_board.md";
  slug: "board";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"others_easytools.md": {
	id: "others_easytools.md";
  slug: "easytools";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"others_fontpicker.md": {
	id: "others_fontpicker.md";
  slug: "fontpicker";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"others_prayertimes.md": {
	id: "others_prayertimes.md";
  slug: "prayers_time";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"others_resume.md": {
	id: "others_resume.md";
  slug: "resume";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"others_snake.md": {
	id: "others_snake.md";
  slug: "snack";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"others_tictactoe.md": {
	id: "others_tictactoe.md";
  slug: "tictactoe";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"others_upworkvis.md": {
	id: "others_upworkvis.md";
  slug: "upwork_visualization";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"others_weather.md": {
	id: "others_weather.md";
  slug: "weather";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"resourcesr_app.md": {
	id: "resourcesr_app.md";
  slug: "resourcesr";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"resourcesr_cli.md": {
	id: "resourcesr_cli.md";
  slug: "resourcesr_cli";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"resourcesr_lite.md": {
	id: "resourcesr_lite.md";
  slug: "resourcesr_lite";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"resourcesr_web.md": {
	id: "resourcesr_web.md";
  slug: "resourcesr_web";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"riu_alumni.md": {
	id: "riu_alumni.md";
  slug: "alumni_riu";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"upwork_ pythonconsulting.md": {
	id: "upwork_ pythonconsulting.md";
  slug: "upwork_pythonconsulting";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"upwork_alertsystem.md": {
	id: "upwork_alertsystem.md";
  slug: "upwork_alertsystem";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"upwork_bungalowsoftware.md": {
	id: "upwork_bungalowsoftware.md";
  slug: "upwork_bungalowsoftware";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"upwork_collaboration-app.md": {
	id: "upwork_collaboration-app.md";
  slug: "collaboration-app";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"upwork_democraticai.md": {
	id: "upwork_democraticai.md";
  slug: "democraticai";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"upwork_leadcrm.md": {
	id: "upwork_leadcrm.md";
  slug: "leadcrm";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"upwork_munacjny.md": {
	id: "upwork_munacjny.md";
  slug: "upwork_munacjny";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"upwork_replay.md": {
	id: "upwork_replay.md";
  slug: "replay-connect";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"upwork_weareappointments.md": {
	id: "upwork_weareappointments.md";
  slug: "upwork_weareappointments";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
};
"skills": {
"frameworks.md": {
	id: "frameworks.md";
  slug: "frameworks";
  body: string;
  collection: "skills";
  data: InferEntrySchema<"skills">
} & { render(): Render[".md"] };
"languages.md": {
	id: "languages.md";
  slug: "languages";
  body: string;
  collection: "skills";
  data: InferEntrySchema<"skills">
} & { render(): Render[".md"] };
"tools.md": {
	id: "tools.md";
  slug: "tools";
  body: string;
  collection: "skills";
  data: InferEntrySchema<"skills">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = typeof import("../src/content/config");
}
