<template>
  <v-navigation-drawer
    clipped
    app
    mini-variant
    :mini-variant="drawer"
    permanent
  >
    <v-list dense>
      <template v-for="(item, idx) in navbarItems">
        <v-list-group
          v-if="item.children"
          :key="item.text + idx"
          v-model="item.model"
          :prepend-icon="item.model ? item.icon : item['icon-alt']"
          append-icon=""
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(child, i) in item.children"
            :key="child.text + i"
            link
            :to="{name: child.routeName}"
          >
            <v-list-item-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ child.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item
          v-else
          :key="item.text + idx"
          link
          :to="{name: item.routeName}"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import menuItems from '@/constants/MenuItems';
  import IMenuItem from '@/types/IMenuItem';
  import ISubMenuItem from '@/types/ISubMenuItem';

  @Component({
    name: 'Navigation'
  })
  export default class Navigation extends Vue {
    @Prop({ required: true })
    private readonly drawer!: boolean;

    private navbarItems: (IMenuItem|ISubMenuItem)[] = menuItems
  }
</script>

<style scoped>

</style>
