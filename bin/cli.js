#!/usr/bin/env node

import { program } from 'commander';
import { createProject } from '../src/commands/create-project.js';

program
  .name('hot-platwight-typescript')
  .description('CLI to bootstrap Playwright E2E testing projects')
  .version('1.0.0');

program
  .command('create')
  .description('Create a new Playwright E2E testing project')
  .argument('[name]', 'Project name')
  .option('-t, --template <template>', 'Template to use (react, vue, vanilla)', 'react')
  .action(async (name, options) => {
    await createProject(name, options);
  });

program.parse();