<template>
	<div class="sidebar"  :class="`${isSidebarExpanded ? 'is-sidebar-expanded' : ''}`">
		<span class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<i class='bx bx-chevrons-right icon' ></i>
			</button>
		</span>
		<span class="sidebar-logo">
			<img src="../assets/logo.png" alt="logo" />
		</span>

		<!-- <span class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<i class='bx bx-chevrons-right icon' ></i>
			</button>
		</span> -->

		<h3>Menu</h3>
		<div class="menu-navigation">
			<router-link to="/" class="button">
				<i class='bx bx-home-alt icon' ></i>
				<span class="menu-text">Home</span>
			</router-link>
			<router-link to="/play" class="button">
				<i class='bx bx-dice-6 icon' ></i>
				<span class="menu-text">Play</span>
			</router-link>
			<router-link to="/contact" class="button">
				<i class='bx bx-envelope icon' ></i>
				<span class="menu-text">Contact</span>
			</router-link>
		</div>

		<div class="flex"></div>
		
		<div class="menu-login">
			<router-link to="/login" class="button">
				<i class='bx bx-log-in-circle icon' ></i>
				<span class="menu-text">Login</span>
			</router-link>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['toggle-sidebar']);

const isSidebarExpanded = ref(localStorage.getItem("isSidebarExpanded") === "true")

const ToggleMenu = () => {
  isSidebarExpanded.value = !isSidebarExpanded.value
  localStorage.setItem("isSidebarExpanded", isSidebarExpanded.value)

  emit('toggle-sidebar', isSidebarExpanded.value);
}
</script>

<style lang="scss" scoped>
.sidebar {
	display: flex;
	flex-direction: column;

	background-color: var(--clr-primary);
	color: var(--clr-primary-dark);

	width: calc(2rem + 32px);
	min-height: 100vh;
	padding: 1rem;

	transition: 0.5s ease-in-out;

  position: fixed;
	.flex {
		flex: 1 1 0%;
	}

	.sidebar-logo {
		transition: 0.2s ease-in-out;
		margin-bottom: 1rem;
	}

	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

		.menu-toggle {
      background-color: transparent;
			transition: 0.2s ease-in-out;
      border: transparent;
			.icon {
				font-size: 2rem;
				color: var(--clr-neutral);
				transition: 0.2s ease-out;
			}
			
			&:hover {
				.icon {
					color: var(--clr-neutral-dark);
					transform: translateX(0.5rem);
				}
			}
		}
	}

  &.is-sidebar-expanded {
		width: 250px;

		.sidebar-logo {
			margin-top: -2rem;
			transition: 0.2s ease-in-out;
		}

		.menu-toggle-wrap {
			
			.menu-toggle {
				transform: rotate(-180deg);
        position: absolute;
			}
		}

		h3, .button .menu-text {
			opacity: 1;
		}

		.button {
			.icon {
				margin-right: 1rem;
			}
		}
	}

	h3, .button .menu-text {
		opacity: 0;
		transition: opacity 0.2s ease-in-out;
	}

	h3 {
		color: var(--clr-neutral);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

	.menu-navigation, .menu-login {
		margin: 0 -1rem;

		.button {
			display: flex;
			align-items: center;
			text-decoration: none;

			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;

			.icon {
				font-size: 2rem;
				color: var(--clr-neutral);
				transition: 0.2s ease-in-out;
			}
			.menu-text {
        font-weight: 700;
				color: var(--clr-neutral);
				transition: 0.2s ease-in-out;
			}

			&:hover {
				background-color: var(--clr-neutral-light);

				.icon, .menu-text {
					color: var(--clr-neutral-dark);
				}
			}

			&.router-link-exact-active {
				background-color: var(--clr-neutral-light);
				border-right: 5px solid var(--clr-accent);

				.icon, .menu-text {
					color: var(--clr-neutral-dark);
				}
			}
		}
	}
}
</style>