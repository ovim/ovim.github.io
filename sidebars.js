/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  'git-svn': {
    'git': [
      'git-svn/git/base',
      'git-svn/git/command',
      'git-svn/git/git-flow',
      'git-svn/git/git-hook',
      'git-svn/git/question',
    ],
    'svn': [
      'git-svn/svn/base',
    ]
  },
  'php': {
    '基础': [
      'php/base',
    ],
    '框架': [
      'php/framework',
      {
        'ThinkPHP5.1':  [
          'php/thinkphp/5.1/README',
          {
            '基础': [
              'php/thinkphp/5.1/base/install',
              'php/thinkphp/5.1/base/development-specification',
              'php/thinkphp/5.1/base/directory-structure',
              'php/thinkphp/5.1/base/config',
            ],
          }
        ],
        'ThinkPHP6.0': [
          'php/thinkphp/thinkphp6.0',
        ],
      },
      {
        'Yii2': [
          'php/yii/yii2',
          {
            '常用组件': [
              'php/yii/widgets/datePicker'
            ],
          },
          'php/yii/question'
        ],
      },
      {
        'Laravel': [
          'php/laravel/laravel',
          'php/laravel/install',
        ],
      }
    ],
  },
  'Linux': [
    'linux/README',
    {
      'study': [
        'linux/command',
        'linux/firewall',
        'linux/linux-ftp',
        'linux/crontab',
        'linux/question',
      ],
    }
  ],
  'JS/CSS/JQuery': {
    'HMTL': [
      'html/README',
    ],
    'JavaScript': [
      'javascript/README',
      'javascript/common-method',
    ],
    'JQuery': [
      'jquery/README',
      'jquery/common-method'
    ],
    'CSS': [
      'css/README',
    ],
    'Layui': [
      'layui/use',
    ],
    'Vue': [
      'vue/README',
    ]
  },
  'SQL': [
    'sql/README',
    {
      'MySQL': [
        'sql/mysql/README',
        'sql/mysql/grammar',
        'sql/mysql/operation',
      ],
      'Redis': [
        'sql/redis/README',
        'sql/redis/data_type',
        'sql/redis/command',
        'sql/redis/usage_scenarios',
        'sql/redis/redis-bit'
      ],
      'MemCache': [
        'sql/memcache/README',
      ],
      'ElasticSearch': [
        'sql/elasticsearch/README',
        'sql/elasticsearch/docker-es',
      ],
    },
  ],
  'Docker': [
    'docker/README',
    'docker/command',
    'docker/docker-dev-web',
    'docker/question'
  ]
};
