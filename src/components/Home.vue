<script setup></script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 bg-customWhite">
    <!-- MAIN Col 1 -->
    <div class="col-span-1">
      <!-- row A -->
      <div class="grid grid-rows-2 gap-4">
        <div class="bg-lightYellow p-6 h-96 rounded-xl shadow-md">
          <p class="text-xl md:text-2xl lg:text-3xl font-bold">
            <span class="text-customBlack"
              >Create and<br />schedule<br />
              content </span
            ><br />
            <span class="text-darkPurple">quicker.</span>
          </p>
          <div class="mt-4">
            <button
              class="capitalize text-xl bg-darkYellow text-darkPurple font-bold py-4 w-48 rounded-full"
            >
              Create post
            </button>
          </div>
        </div>
        <!-- row B -->
        <div class="text-4xl bg-darkYellow p-6 h-96 rounded-xl shadow-md">
          <p class="text-xl md:text-2xl lg:text-3xl font-bold">
            Write your<br />content<br />using AI.
          </p>
        </div>
      </div>
    </div>
    <!-- MAIN Col 2 -->
    <!-- ........................................Sub col 1........................................ -->
    <div class="md:col-span-2">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Col A -->
        <div class="md:row-span-2">
          <!-- first row -->
          <div class="bg-darkPurple h-48 p-4 rounded-xl text-center shadow-md">
            <p class="text-xl md:text-2xl lg:text-3xl">
              <span class="text-customWhite">Social Media</span>
              <span class="text-darkYellow">10x</span>
              <br />
              <span class="text-customWhite">Faster with AI</span>
            </p>
          </div>
          <!-- second row -->
          <div class="grid grid-cols-2 gap-4 mt-4">
            <!-- first col -->
            <div class="p-6 shadow-md rounded-md">Content 1</div>
            <!-- second col -->
            <div class="p-6 shadow-md bg-darkYellow rounded-xl">Content 2</div>
          </div>
        </div>
        <!-- Col B -->
        <div class="bg-lightPurple h-96 p-4 rounded-md shadow-md"></div>
        <!-- ........................................Sub col 2........................................ -->
        <div class="grid grid-cols-3 gap-4 md:col-span-2 mt-4">
          <!-- First column -->
          <div class="col-span-1 bg-lightYellow p-6 rounded-md shadow-md">Column 1</div>
          <!-- Second column -->
          <div class="col-span-2 bg-darkPurple p-6 rounded-md shadow-md text-customWhite">
            Column 2
          </div>
        </div>
      </div>
    </div>

    <!-- ........................................Sub col 2........................................ -->
  </div>
</template>

<style scoped></style>
