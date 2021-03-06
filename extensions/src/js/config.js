/*
 * Copyright (C) 2017 eschao <esc.chao@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

HTMLCollection.prototype.forEach = Array.prototype.forEach;

const CLIENT_ID           = "cf0ec09e8a65db31a4d7";
const REDIRECT_URI        = "http://mgit.chaozh.net:9080/github-oauth-cb";
const GITHUB_TOKEN_Q      = "github_token=";
const SCOPE               = "user:email,repo";
const MYGIT_SETTINGS_KEY  = "mygit-settings-key";

const MYGIT_GITHUB_KEY                        = "mygit-github-key";
const MYGIT_GITHUB_E_KEY                      = "mygit-github-e-key";
const MYGIT_GITHUB_ISSUE_EXPORT_KEY           = "mygit-github-issue-export-key";
const MYGIT_GITHUB_FAVORITE_REPOS_KEY         = "mygit-github-favorite-repos-key";
const MYGIT_GITHUB_ISSUE_FILTER_KEY           = "mygit-github-issue-filter-key";
const MYGIT_GITHUB_ISSUE_FILTER_SETTINGS_KEY  = "mygit-github-issue-filter-settings-key";

const MYGIT_ZENHUB_KEY    = "mygit-zenhub-key";
const MYGIT_ZENHUB_E_KEY  = "mygit-zenhub-e-key";

