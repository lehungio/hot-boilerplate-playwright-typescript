import path from 'path';
import fs from 'fs-extra';
import chalk from 'chalk';
import ora from 'ora';
import { execa } from 'execa';
import prompts from 'prompts';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function createProject(providedName, options) {
  const projectName = providedName || await askProjectName();
  const template = options.template || 'react';
  
  const spinner = ora('Creating project...').start();
  
  try {
    const projectPath = path.resolve(process.cwd(), projectName);
    await createProjectStructure(projectPath, template);
    
    spinner.succeed(chalk.green(`Project ${projectName} created successfully!`));
    
    console.log('\nNext steps:');
    console.log(chalk.cyan(`  cd ${projectName}`));
    console.log(chalk.cyan('  npm install'));
    console.log(chalk.cyan('  npm run test:e2e'));
  } catch (error) {
    spinner.fail(chalk.red('Failed to create project'));
    console.error(error);
    process.exit(1);
  }
}

async function askProjectName() {
  const response = await prompts({
    type: 'text',
    name: 'projectName',
    message: 'What is your project name?',
    validate: value => value.length > 0 ? true : 'Project name is required'
  });
  
  return response.projectName;
}

async function createProjectStructure(projectPath, template) {
  await fs.ensureDir(projectPath);
  
  // Create base structure
  const structure = {
    'tests/e2e/specs/auth': {},
    'tests/e2e/specs/home': {},
    'tests/e2e/utils': {},
    'tests/e2e/fixtures': {},
  };
  
  // Create directories
  for (const [dir] of Object.entries(structure)) {
    await fs.ensureDir(path.join(projectPath, dir));
  }
  
  // Copy template files
  const templatesDir = path.join(__dirname, '../../templates', template);
  await fs.copy(templatesDir, projectPath);
  
  // Create base test files
  await createTestFiles(projectPath);
}