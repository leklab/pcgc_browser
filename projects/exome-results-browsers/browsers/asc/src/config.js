export default {
  browserTitle: 'ASC browser',
  navBarTitle: 'Autism Sequencing Consortium exome analysis',
  navBarColor: '#23509c',
  homePageHeading: 'Autism Sequencing Consortium exome analysis',
  elasticsearch: {
    geneResults: {
      index: 'asc_gene_results_2019_04_14',
      type: 'result',
    },
    variants: {
      index: 'asc_variant_results_2019_04_16',
      type: 'variant',
    },
  },
  geneResults: {
    resultsPageHeading: 'Results',
    views: {
      manhattan: false,
      qq: false,
    },
    groups: {
      options: ['All'],
      labels: {
        All: 'All',
      },
    },
    defaultSortColumn: 'qval',
    columns: [
      {
        key: 'xcase_dn_ptv',
        heading: 'De\u00a0novo PTV Cases',
        tooltip: 'De\u00a0novo protein-truncating variants cases',
        minWidth: 70,
        grow: 0,
        type: 'int',
      },
      {
        key: 'xcont_dn_ptv',
        heading: 'De\u00a0novo PTV Controls',
        tooltip: 'De\u00a0novo protein-truncating variants controls',
        minWidth: 70,
        grow: 0,
        type: 'int',
      },
      {
        key: 'xcase_dn_misa',
        heading: 'De\u00a0novo MisA Cases',
        tooltip: 'De\u00a0novo missense variants with MPC 1-2 cases',
        minWidth: 70,
        grow: 0,
        type: 'int',
      },
      {
        key: 'xcont_dn_misa',
        heading: 'De\u00a0novo MisA Controls',
        tooltip: 'De\u00a0novo missense variants with MPC 1-2 controls',
        minWidth: 70,
        grow: 0,
        type: 'int',
      },
      {
        key: 'xcase_dn_misb',
        heading: 'De\u00a0novo MisB Cases',
        tooltip: 'De\u00a0novo missense variants with MPC \u2265 2 cases',
        minWidth: 70,
        grow: 0,
        type: 'int',
      },
      {
        key: 'xcont_dn_misb',
        heading: 'De\u00a0novo MisB Controls',
        tooltip: 'De\u00a0novo missense variants with MPC \u2265 2 controls',
        minWidth: 70,
        grow: 0,
        type: 'int',
      },
      {
        key: 'xcase_dbs_ptv',
        heading: 'DBS PTV Cases',
        tooltip: 'Protein-truncating variants in iPSYCH ("Danish blood spot") cohort cases',
        minWidth: 70,
        grow: 0,
        type: 'int',
      },
      {
        key: 'xcont_dbs_ptv',
        heading: 'DBS PTV controls',
        tooltip: 'Protein-truncating variants in iPSYCH ("Danish blood spot") cohort controls',
        minWidth: 70,
        grow: 0,
        type: 'int',
      },
      {
        key: 'xcase_swe_ptv',
        heading: 'SWE PTV Cases',
        tooltip: 'Protein-truncating variants in Swedish cohort cases',
        minWidth: 70,
        grow: 0,
        type: 'int',
      },
      {
        key: 'xcont_swe_ptv',
        heading: 'SWE PTV Controls',
        tooltip: 'Protein-truncating variants in Swedish cohort controls',
        minWidth: 70,
        grow: 0,
        type: 'int',
      },
      {
        key: 'xcase_tut',
        heading: 'Transmitted',
        tooltip: 'Protein-truncating variants transmitted to probands',
        minWidth: 100,
        grow: 0,
        type: 'int',
      },
      {
        key: 'xcont_tut',
        heading: 'Untransmitted',
        tooltip: 'Protein-truncating variants not transmitted to probands',
        minWidth: 115,
        grow: 0,
        type: 'int',
      },
      {
        key: 'qval',
        heading: 'Q\u2011Val',
        minWidth: 100,
        grow: 0,
      },
    ],
  },
  variants: {
    groups: {
      options: ['ASC_DN', 'SWE', 'DBS'],
      labels: {
        ASC_DN: 'De novo variants',
        SWE: 'Swedish cohort',
        DBS: 'iPSYCH ("Danish blood spot") cohort',
      },
    },
    consequences: [], // ASC data uses VEP consequence terms, so no extra terms need to be registered
    columns: [
      {
        key: 'in_analysis',
        heading: 'In Analysis',
        minWidth: 85,
        render: value => (value ? 'yes' : ''),
        renderForCSV: value => (value ? 'yes' : ''),
        showOnDetails: false,
        showOnGenePage: true,
      },
    ],
  },
}
