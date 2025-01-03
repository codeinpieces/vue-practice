<script setup>
import { RouterLink } from 'vue-router'
import WelcomeItem from './NavbarItem.vue'
import DocumentationIcon from '../icons/IconDocumentation.vue'
import ToolingIcon from '../icons/IconTooling.vue'
import EcosystemIcon from '../icons/IconEcosystem.vue'
import CommunityIcon from '../icons/IconCommunity.vue'
import SupportIcon from '../icons/IconSupport.vue'
</script>

<template>
  <nav>
    <RouterLink to="/">
      <WelcomeItem>
        <template #icon>
          <DocumentationIcon />
        </template>

        <template #heading> Home </template>
      </WelcomeItem>
    </RouterLink>

    <RouterLink to="/education">
      <WelcomeItem>
        <template #icon>
          <ToolingIcon />
        </template>

        <template #heading> Education </template>
      </WelcomeItem>
    </RouterLink>

    <RouterLink to="/hobbies"> </RouterLink>

    <RouterLink to="/skills">
      <WelcomeItem>
        <template #icon>
          <EcosystemIcon />
        </template>

        <template #heading> Skills </template>
      </WelcomeItem>
    </RouterLink>

    <RouterLink to="/blog">
      <WelcomeItem>
        <template #icon>
          <CommunityIcon />
        </template>

        <template #heading> Blog </template>
      </WelcomeItem>
    </RouterLink>

    <RouterLink to="/others">
      <WelcomeItem>
        <template #icon>
          <SupportIcon />
        </template>

        <template #heading> Something else </template>
      </WelcomeItem>
    </RouterLink>
  </nav>
</template>
